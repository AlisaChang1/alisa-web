import React from 'react';
import './about.css';
import background from "../Images/36401449295_e25881d153_b.jpg";

function about() {
    console.log('test');
  return (
    <div>
      <img className="background" src={background}></img>
      <h2>Test</h2>
      <h1>Alisa Chang</h1>
    </div>
  );
}

export default about;
