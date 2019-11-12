import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <h4>Login/Signup to start the chat</h4>

      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/register">Register</Link>
    </div>
  );
}
