import React from 'react';
import TopHome from './topHome';
import SecondHome from './secondHome';
import NavBar from '../NavBar/index';

function homeComponents() {
  return (
    <div>
      <SecondHome></SecondHome>
      <TopHome></TopHome>
      <NavBar></NavBar>
    </div>
  );
}

export default homeComponents;
