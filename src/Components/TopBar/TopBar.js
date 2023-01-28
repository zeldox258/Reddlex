import React from 'react';
import './TopBar.css';
// we can add more
function TopBar() {
  return (
    <div className="top-bar">
      <nav>
        <ul className="top-bar-nav">

          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#TechStack">TechStack</a>
          </li>
          <li>
            <a href="#contact">Vision</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
