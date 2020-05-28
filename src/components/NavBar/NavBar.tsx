import React from 'react';
import logo from '../images/SmallLogo.png';
import './styles.ts';
import Home from '../Home/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar, Options, Logo, Resume } from './styles';

const Navbar = () => {
  return (
    <Router basename='/alisa-web'>
      <NavBar>
        <Options href='/home'>
          <Route path={['/home', '/resume']} component={Home}>
            <Logo src={logo}></Logo>
          </Route>
        </Options>
        <Options href='/resume'>
          <Route path={['/resume', '/home']} component={Resume}>
            <Resume className='options'>Resume</Resume>
          </Route>
        </Options>
      </NavBar>
    </Router>
  );
};

export default Navbar;
