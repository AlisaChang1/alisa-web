import React from "react";
import logo from "../../images/HomeImages/SmallLogo.png";
import Home from "../../pages/Home/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Options, Logo, Links, NavBar } from "./styles";

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
            <Link to='/resume'>Resume</Link>
          </Links>
          <Links>
            <Link to='/coach'>Life Coaching</Link>
          </Links>
          <Links>
            <Link to='/about'>About</Link>
          </Links>
          <Links>
            <Link to='/contact'>Contact</Link>
          </Links>
          <Links>
            <Link to='/blog'>Blog</Link>
          </Links>
        </ul>
      </NavBar>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
};

export default Navbar;
