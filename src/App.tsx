import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import StickyFooter from "./components/StickyFooter/StickyFooter";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <StickyFooter />
      </div>
    );
  }
}

export default App;
