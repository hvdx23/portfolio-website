import React from 'react';
import { Link } from 'react-scroll';
import './header.css';
import Card from './LinkPages';

function Header() {
  return (
    <header className="header">
      
      <h1>HARIKRISHNAN VENUGOPAL</h1>
      <nav>
        <ul>
        
        
          <li>
            <Link to="about" smooth={true} duration={1000} className="nav-link" >
              About Me
            </Link>
          </li>
          <li>
            <Link to="qualifications" smooth={true} duration={1000} className="nav-link">
              Qualifications
            </Link>
          </li>
          <li>
            <Link to="techstack" smooth={true} duration={1000} className="nav-link">
              Tech Stack
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={1000} className="nav-link">
              Repository
            </Link>
          </li>
          
          <li>
            <Link to="contact" smooth={true} duration={1000} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        {/* <div className="card-container">
          <Card />
        </div> */}
      </nav>
    </header>
  );
}

export default Header;