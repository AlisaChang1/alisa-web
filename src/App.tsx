import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import StickyFooter from "./components/StickyFooter/StickyFooter";
import isMobile from "./helpers/isMobile";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import { Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        {isMobile() ? <HamburgerMenu /> : <NavBar />}
        <StickyFooter />
      </>
    );
  }
}

export default App;
