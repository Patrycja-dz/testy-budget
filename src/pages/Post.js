import React from "react";
import { Link } from "react-router-dom";
import laying2 from "./../images/lying-yoga2.jpg";
function Post() {
  return (
    <>
      <h2 className="heading heading--padded">Single Post</h2>
      <section className="single-post">
        <div className="articles">
          <figure>
            <figcaption>
              <h3 className="article__postTitle">A Strong and Flexible Body</h3>
            </figcaption>
            <span className="article__date">April 5, 2023 </span>
            <img src={laying2} alt="yoga lying down legs in the air" />
          </figure>
          <article className="article__paragraph">
            <p>
              This website template has been designed by Free Website Templates
              for you, for free. You can replace all this text with your own
              text. Want an easier solution for a Free Website? Head straight to
              Wix and immediately start customizing your website! Wix is an
              online website builder with a simple drag & drop interface,
              meaning you do the work online and instantly publish to the web.
              Nothing to download, nothing to upload.
            </p>
          </article>
          <article className="article__paragraph">
            <p>
              All Wix templates are fully customizable and free to use. Just
              pick one you like, click Edit, and enter the online editor.
              Change, add, and remove items as you like. Wix also offers a ton
              of free design elements right inside the editor, like images,
              icons, animation files, and interactive widgets. Publish your Free
              Website in minutes! You can remove any link to our website from
              this website template, you're free to use this website template
              without linking back to us. If you're having problems editing this
              website template, then don't hesitate to ask for help on the
              Forums.
            </p>
          </article>
        </div>

        <aside className="aside">
          <h3 className="article__postTitle">Recent Posts</h3>
          <ul className="artcile__items">
            <li className="article__item">
              <h4 className="title">
                <Link to="/single-post">Summer Yoga Classes</Link>
              </h4>
              <span className="article__date">April 7, 2023 </span>
            </li>
            <li className="article__item">
              <h4 className="title">
                <Link to="/single-post">Inner peace</Link>
              </h4>
              <span className="article__date">April 6, 2023 </span>
            </li>
            <li  className="article__item">
              <h4 className="title">
                <Link to="/single-post">What is Yoga?</Link>
              </h4>
              <span className="article__date">April 5, 2023 </span>
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
}

export default Post;
