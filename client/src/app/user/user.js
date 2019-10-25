import React, { Component } from "react";
import OpenSocket from "socket.io-client";

class User extends Component {
  componentDidMount = () => {
    OpenSocket("/");
  };
  render() {
    return <div>I am an user</div>;
  }
}

export default User;
