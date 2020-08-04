import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import { StyledToolBar, StyledListItem } from "./styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import ComingSoon from "../../pages/Coming Soon/ComingSoon";
import Contact from "../../pages/Contact/Contact";

const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position='fixed'>
        <StyledToolBar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerClick}
            edge='start'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Menu
          </Typography>
        </StyledToolBar>
      </AppBar>
      <Router basename='/alisa-web'>
        <Drawer variant='persistent' anchor='left' open={open}>
          <div>
            <IconButton onClick={handleDrawerClick}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <StyledListItem button key='Home'>
              <Link to='/'>
                <ListItemText onClick={handleDrawerClick} primary='Home' />
              </Link>
            </StyledListItem>
            <StyledListItem button key='Resume'>
              <Link to='/resume'>
                <ListItemText primary='Resume' onClick={handleDrawerClick} />
              </Link>
            </StyledListItem>
            <StyledListItem button key='Life Coaching'>
              <Link to='/coach'>
                <ListItemText
                  primary='Life Coaching'
                  onClick={handleDrawerClick}
                />
              </Link>
            </StyledListItem>
            <StyledListItem button key='About'>
              <Link to='/about'>
                <ListItemText primary='About' onClick={handleDrawerClick} />
              </Link>
            </StyledListItem>
            <StyledListItem button key='Contact'>
              <Link to='/contact'>
                <ListItemText primary='Contact' onClick={handleDrawerClick} />
              </Link>
            </StyledListItem>
            <StyledListItem button key='Blog'>
              <Link to='/blog'>
                <ListItemText primary='Blog' onClick={handleDrawerClick} />
              </Link>
            </StyledListItem>
          </List>
        </Drawer>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' component={ComingSoon} />
          <Route exact path='/coach' component={ComingSoon} />
          <Route exact path='/about' component={ComingSoon} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/blog' component={ComingSoon} />
        </Switch>
      </Router>
    </>
  );
};

export default HamburgerMenu;
