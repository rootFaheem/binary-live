import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

import IndexRoute from "../app/routes/index.routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <IndexRoute></IndexRoute>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
