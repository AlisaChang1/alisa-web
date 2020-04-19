import React from 'react';
import './topHome.css';
import background from "../Images/36401449295_e25881d153_b.jpg";

function topHome() {
  return (
    <div>
      <img className="background" src={background}></img>
      <h2>Hi! My name is</h2>
      <h1>Alisa Chang</h1>
    </div>
  );
}

export default topHome;
