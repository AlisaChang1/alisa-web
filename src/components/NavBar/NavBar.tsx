import React from 'react';
import logo from '../images/SmallLogo.png';
import './styles.ts';
import Home from '../Home/index';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Options, Logo, Resume } from './styles';

const Navbar = () => {
  return (
    <Router basename='/alisa-web'>
      <nav>
        <ul>
          <Options>
            <Link to='/home'>
              <Logo src={logo}></Logo>
            </Link>
          </Options>
          <Resume>
            <Link to='/resume'>Resume</Link>
          </Resume>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/home' component={Home} />
      </Switch>
    </Router>
  );
};

export default Navbar;
