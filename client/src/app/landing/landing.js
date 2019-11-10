import React from "react";

import { Route, Switch } from "react-router-dom";

import RegisterForm from "../forms/register.form";
import LoginForm from "../forms/login.form";

import Container from "@material-ui/core/Container";
import AppBar from "../navBar/navBar";
import ChatList from "../user/user";

export default function landing() {
  return (
    <div>
      <AppBar></AppBar>
      <Switch>
        <Route path="/register" component={RegisterForm}></Route>
        <Route path="/login" component={LoginForm}></Route>
      </Switch>
      <Container>{/* <ChatList></ChatList> */}</Container>
    </div>
  );
}
