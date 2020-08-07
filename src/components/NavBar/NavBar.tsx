import React from "react";
import logo from "../../images/HomeImages/SmallLogo.png";
import Home from "../../pages/Home/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Options, Logo, Links, NavBar } from "./styles";
import ComingSoon from "../../pages/Coming Soon/ComingSoon";
import Contact from "../../pages/Contact/Contact";
import Profile from "../../pages/Profile/Profile";

const Navbar = () => {
  return (
    <Router basename='/alisa-web'>
      <NavBar>
        <ul>
          <Options>
            <Link to='/'>
              <Logo src={logo}></Logo>
            </Link>
          </Options>
          <Links>
            <Link to='/about'>About</Link>
          </Links>
          <Links>
            <Link to='/resume'>Resume</Link>
          </Links>
          <Links>
            <Link to='/coach'>Life Coaching</Link>
          </Links>
          <Links>
            <Link to='/blog'>Blog</Link>
          </Links>
          <Links>
            <Link to='/contact'>Contact</Link>
          </Links>
        </ul>
      </NavBar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/resume' component={Profile} />
        <Route exact path='/coach' component={ComingSoon} />
        <Route exact path='/about' component={ComingSoon} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/blog' component={ComingSoon} />
      </Switch>
    </Router>
  );
};

export default Navbar;
