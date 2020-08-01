import React from 'react';
import logo from '../../images/HomeImages/SmallLogo.png';
import Home from '../../pages/Home/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Options, Logo, Resume, NavBar } from './styles';

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
                    <Resume>
                        <Link to='/resume'>Resume</Link>
                    </Resume>
                </ul>
            </NavBar>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    );
};

export default Navbar;
