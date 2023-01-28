import React from 'react';
import './TopBar.css';
import logo from '../../img/logo.jpeg'

// we can add more
function TopBar() {
  return (
    <div className="top-bar">
      <nav>
        <ul className="top-bar-nav">

          <li>
          <a href="home">
            <img src={logo} alt={logo}/>
          </a>
          </li>
          <li>
            <a href="#home">WHO ARE WE?</a>
          </li>
          <li>
            <a href="#project">PROJECTS</a>
          </li>
          <li>
            <a href="#TechStack">TECHSTACK</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
