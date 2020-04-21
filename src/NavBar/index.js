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
        <a href='/'>
          <Route path={['/', '/resume']} component={Home}>
            <img className='smallLogo' src={logo}></img>
          </Route>
        </a>
        <a href='/resume'>
          <Route path={['/resume', '/']} component={Resume}>
            <div className='options'>Resume</div>
          </Route>
        </a>
      </div>
    </Router>
  );
}

export default navbar;
