import React, { Component } from "react";

// import Landing from "../app/landing/landing";
import "./App.css";

import AppBar from "../app/navBar/navBar";
import Login from "../app/forms/login.form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <Login></Login>
        {/* <Landing></Landing> */}
      </div>
    );
  }
}

export default App;
