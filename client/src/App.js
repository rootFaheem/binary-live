import React, { Component } from "react";
import io from "socket.io-client";

import "./App.css";

const socket = io();

// const adminSocket = io("http://localhost:5000/");

class App extends Component {
  componentDidMount = () => {
    const socketReq = io.connect();
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
