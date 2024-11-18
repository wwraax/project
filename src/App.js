import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Blog, Contact, Home, Team, Error, Services, Projects } from './pages';
import './App.css'
import logo from '../src/Img/Team/Logo.png'
import Icons from '../src/Img/Team/Icons.png'
import vector from '../src/Img/Team/Vector.png'

function App() {
  return (

    <Router>
      <header className="header">
        <div className="container">
          <div className="cafe">
            <img src={logo} alt="" />
            <ul className="geth">
              <Link to={'/'}>Home</Link>
              <Link to={'/blog'}>Blog</Link>
              <Link to={'/contact'}>Сontact</Link>
              <Link to={'/team'}>Team</Link>
              <Link to={'/services'}>Services</Link>
              <Link to={'/projects'}>Projects</Link>
              <img className="vector" src={vector} alt="" />
            </ul>
          </div>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/team' element={<Team />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Error />} />

      </Routes>

      <div>
        <footer className="footer">
          <div className="container">
            <div className="cat">
              <ul className="ul_bro">
                <li className="li_mom">
                  <img src={logo} alt="" />
                </li>
                <li className="li_mom">
                  It is a long established fact that a reader will be distracted lookings.
                </li>
                <li className="li_mom">
                  <img src={Icons} alt="" />
                </li>
              </ul>
              <ul className="ul_dad">
                <ul>
                  <h2 className="li_mum">Pages</h2>
                  <li className="li_mom">About Us</li>
                  <li className="li_mom">Our Projects</li>
                  <li className="li_mom">Our Team</li>
                  <li className="li_mom">Contact Us</li>
                  <li className="li_mom">Services</li>
                </ul>
                <ul>
                  <h2 className="li_mum">Services</h2>
                  <li className="li_mom">Kitchan</li>
                  <li className="li_mom">Living Area</li>
                  <li className="li_mom">Bathroom </li>
                  <li className="li_mom">Dinning Hall</li>
                  <li className="li_mom">Bedroom</li>
                </ul>
                <ul className="ul_cont">
                  <h2 className="li_mum">Contact</h2>
                  <li className="li_mom">55 East Birchwood Ave. Brooklyn, New York 11201</li>
                  <li className="li_mom">contact@interno.com</li>
                  <li className="li_mom">(123) 456 - 7890</li>
                </ul>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
