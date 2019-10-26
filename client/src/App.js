import React, { Component } from "react";

import User from "./app/user/user";
import "./App.css";

import AppBar from "./app/navBar/navBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <User></User>
      </div>
    );
  }
}

export default App;
