import React from 'react';
import logo from '../Images/SmallLogo.png';
import './index.css';
import Home from '../Home/index';
import Resume from '../Resume/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function navbar() {
  return (
    <Router>
      <div className='navbar'>
        <a href='alisa-web'>
          <Route path='/alisa-web' component={Home}>
            <img className='smallLogo' src={logo}></img>
          </Route>
        </a>
        <a className='options' href='alisa-web/resume'>
          Resume
          <Route path='/alisa-web/resume' component={Resume}></Route>
        </a>
      </div>
    </Router>
  );
}

export default navbar;
