import React from 'react';
import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <nav>
        <ul className="top-bar-nav">
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#vision">Vision</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
