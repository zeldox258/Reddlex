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
          <a href="/">
            <img src={logo} alt={logo}/>
          </a>
          </li>
          <li>
            <a href="/#home">Reddlex</a>
          </li>
          <li>
            <a href="/tracker-wallet">Tracker Wallet</a>
          </li>
          <li>
            <a href="/reddlexai">Reddlex AI</a>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
