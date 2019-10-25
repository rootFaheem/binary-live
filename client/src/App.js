import React, { Component } from "react";

import openSocket from "socket.io-client";

import "./App.css";

class App extends Component {
  componentDidMount = () => {
    openSocket("/");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header h1">Binary Live</header>
      </div>
    );
  }
}

export default App;
