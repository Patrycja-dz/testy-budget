import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  return (
    <Router>
      
        <header className="header">
          <h1 className="header__heading">
            Belle &amp; Carrie
            <br />
            <span className="header__subtitle">Rehabilitation Yoga</span>
          </h1>
        </header>
        <nav className="navbar">
          <ul className="navbar__links">
            <Link to="/">
              <li className="navbar__link">HOME</li>
            </Link>
            <Link to="/about">
              <li className="navbar__link">ABOUT</li>
            </Link>
            <Link to="/classes">
              <li className="navbar__link">
                CLASSES
                <ul className="navbar__link navbar__link--dropdown">
                  <Link to="/instructors">
                    <li className="navbar__link">INSTRUCTORS</li>
                  </Link>
                </ul>
              </li>
            </Link>
            <Link to="/contact">
              <li className="navbar__link">CONTACT</li>
            </Link>
            <Link to="/blog">
              <li className="navbar__link">BLOG</li>
            </Link>
          </ul>
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
        <footer>
          <div id="connect">
            <Link
              to="https://freewebsitetemplates.com/go/facebook/"
              id="facebook"
              target="_blank"
            >
              Facebook
            </Link>
            <Link
              to="https://freewebsitetemplates.com/go/twitter/"
              id="twitter"
              target="_blank"
            >
              Twitter
            </Link>
            <Link
              to="https://freewebsitetemplates.com/go/googleplus/"
              id="googleplus"
              target="_blank"
            >
              Google&#43;
            </Link>
            <Link
              to="https://freewebsitetemplates.com/go/pinterest/"
              id="pinterest"
              target="_blank"
            >
              <FontAwesomeIcon icon="fa-brands fab-pinterest" />
            </Link>
          </div>
        </footer>
    </Router>
  );
}

export default App;
