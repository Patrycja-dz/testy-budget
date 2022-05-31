
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Classes from './pages/Classes';
import Instructors from './pages/Instructors';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Post from './pages/Post';
function App() {
  return (
    <Router>
      <div className='wrapper'>
      <nav className='navbar'>
        <h1>Belle &amp; Carrie<br/><span>Rehabilitation Yoga</span></h1>
        <ul className='navlinks'>
          <Link to='/'><li>HOME</li></Link>
          <Link to='/about'><li>ABOUT</li></Link>
          <Link to='/classes'>
            <li>CLASSES
              <ul>
                <Link to='/instructors'>
                    <li>INSTRUCTORS</li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link to='/contact'><li>CONTACT</li></Link>
          <Link to='/blog'><li>BLOG</li></Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/classes' element={<Classes />}/>
        <Route path='/instructors' element={<Instructors />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/single-post' element={<Post />}/>
      </Routes>
      <footer>
        <div id="connect">
          <Link to="https://freewebsitetemplates.com/go/facebook/" id="facebook" target="_blank">Facebook</Link>
			    <Link to="https://freewebsitetemplates.com/go/twitter/" id="twitter" target="_blank">Twitter</Link>
			    <Link to="https://freewebsitetemplates.com/go/googleplus/" id="googleplus" target="_blank">Google&#43;</Link>
			    <Link to="https://freewebsitetemplates.com/go/pinterest/" id="pinterest" target="_blank">Pinterest</Link>
		    </div>
      </footer>
      </div>
    </Router>
  );
}

export default App;
