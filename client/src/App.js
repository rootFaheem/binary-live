import React from "react";
import io from "socket.io-client";

import "./App.css";

const socket = io();

const adminSocket = io("http://localhost:5000/");

function App() {
  return (
    <div className="App">
      <header className="App-header h1">Binary Live</header>
    </div>
  );
}

export default App;
