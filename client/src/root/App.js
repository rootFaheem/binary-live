import React, { Component } from "react";

// import Landing from "../app/landing/landing";
import "./App.css";

import AppBar from "../app/navBar/navBar";
import Register from "../app/forms/register.form";
import Login from "../app/forms/login.form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <Register></Register>
        {/* <Landing></Landing> */}
      </div>
    );
  }
}

export default App;
