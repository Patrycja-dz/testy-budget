import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
//import "./App.css";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Instructors from "./pages/Instructors";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

function App() {
  const style = { color: "#99FA99", fontSize: "26px" };
  return (
    <Router>
      <header className="header">
        <h1 className="header__heading">
          Belle &amp; Carrie <br />
          <span className="header__subtitle"> Rehabilitation Yoga </span>
        </h1>
      </header>
      <nav className="navbar">
        <button className="hamburger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="white"
            viewBox="0 0 24 24"
            stroke="#99FA99"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="navbar__nav">
          <ul className="navbar__links">
            <Link to="/">
              <li className="navbar__link"> HOME </li>
            </Link>
            <Link to="/about">
              <li className="navbar__link"> ABOUT </li>
            </Link>
            <Link to="/classes">
              <li className="navbar__link">
                CLASSES
                <ul className="navbar__link navbar__link--dropdown">
                  <Link to="/instructors">
                    <li className="navbar__link"> INSTRUCTORS </li>
                  </Link>
                </ul>
              </li>
            </Link>
            <Link to="/contact">
              <li className="navbar__link"> CONTACT </li>
            </Link>
            <Link to="/blog">
              <li className="navbar__link"> BLOG </li>
            </Link>
          </ul>
        </div>
      </nav>

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single-post" element={<Post />} />
        </Routes>
      </div>

      <footer className="footer">
        <div className="footer__contact">
          <span> 123 St.City Location, Country | 987654321 </span>
          <p>
            &copy; 2023 by Belle &amp; Carrie Rehabilitation Yoga.All rights
            reserved.
          </p>
        </div>
        <div className="footer__connect">
          <Link
            to="https://freewebsitetemplates.com/go/facebook/"
            id="facebook"
            target="_blank"
          >
            <span>
              <FaFacebookF style={style} />
            </span>
          </Link>
          <Link
            to="https://freewebsitetemplates.com/go/twitter/"
            id="twitter"
            target="_blank"
          >
            <span>
              <FaTwitter style={style} />
            </span>
          </Link>
          <Link
            to="https://freewebsitetemplates.com/go/googleplus/"
            id="googleplus"
            target="_blank"
          >
            <span>
              <TiSocialGooglePlus style={style} />
            </span>
          </Link>
          <Link
            to="https://freewebsitetemplates.com/go/pinterest/"
            id="pinterest"
            target="_blank"
          >
            <span>
              <FaPinterest style={style} />
            </span>
          </Link>
        </div>
      </footer>
    </Router>
  );
}

export default App;
