import React from 'react';
import './topHome.css';

function topHome() {
  return (
    <div>
      <div class="navbar">
        <a className="smallLogo" href="topHome.js">
          <img src="../SmallLogo.png"></img>
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
      <header className="top-header">
      </header>
    </div>
  );
}

export default topHome;
