import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./home/home";
import LoginForm from "../forms/login.form";
import RegisterForm from "../forms/register.form";

import Container from "@material-ui/core/Container";
import AppBar from "../navBar/navBar";
import ChatList from "../user/user";

export default function landing() {
  return (
    <div>
      <AppBar></AppBar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/register" exact component={RegisterForm}></Route>
        <Route path="/login" exact component={LoginForm}></Route>
        <Route path="/chatlist" exact component={ChatList}></Route>
      </Switch>
    </div>
  );
}
