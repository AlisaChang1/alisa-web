import React from 'react';
import './topHome.css';
import background from "./Images/36401449295_e25881d153_b.jpg";
import logo from "./Images/SmallLogo.png";

function topHome() {
  return (
    <div>
      <img className="background" src={background}></img>
      <div class="navbar">
        <a href="topHome.js">
          <img className="smallLogo" src={logo}></img>
        </a>
        <a className="options" href="#news">News</a>
        <a className="options" href="#contact">Contact</a>
      </div>
      <h2>Hi! My name is</h2>
      <h1>Alisa Chang</h1>
      <div class="overlay"></div>
    </div>
  );
}

export default topHome;
