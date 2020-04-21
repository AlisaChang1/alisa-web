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
        <a href='/alisa-web'>
          <Route path={['/alisa-web', '/alisa-web/resume']} component={Home}>
            <img className='smallLogo' src={logo}></img>
          </Route>
        </a>
        <a href='/alisa-web/resume'>
          <Route path={['/alisa-web/resume', '/alisa-web']} component={Resume}>
            <div className='options'>Resume</div>
          </Route>
        </a>
      </div>
    </Router>
  );
}

export default navbar;
