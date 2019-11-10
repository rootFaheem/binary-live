import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

import Landing from "../app/landing/landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Landing></Landing>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
