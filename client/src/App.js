import React, { Component } from "react";

import Landing from "./app/landing/landing";
import "./App.css";

import AppBar from "./app/navBar/navBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <Landing></Landing>
      </div>
    );
  }
}

export default App;
