import React from 'react';
import { Link } from 'react-scroll';
import './header.css';

function Header() {
  return (
    <header className="header">
      <h1>PORTFOLIO</h1>
      <nav>
        <ul>
          <li>
            <Link to="about" smooth={true} duration={1000} hover={true} offset={+70}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="qualifications" smooth={true} duration={1000}>
              Qualifications
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;