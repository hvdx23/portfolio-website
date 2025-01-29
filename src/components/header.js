
import './header.css';

function Header() {
    return (
      <header className="header">
        <h1>PORTFOLIO</h1>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;