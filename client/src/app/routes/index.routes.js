import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Container from "@material-ui/core/Container";

import PrivateRoute from "./privateRoutes/privateRoutes";
import Home from "../home/home";
import LoginForm from "../forms/login.form";
import RegisterForm from "../forms/register.form";
import ChatList from "../user/user";

import { loginUserAction } from "../../store/actions/auth.action";

class Landing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute
            path="/chatlist"
            exact
            component={ChatList}
            isLoggedIn={this.props._auth && this.props._auth.isLoggedIn}
          ></PrivateRoute>

          {this.props._auth && this.props._auth.isLoggedIn ? (
            <Redirect to="/chatlist" />
          ) : null}
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/login" component={LoginForm} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  return {
    _auth: loginReducer
  };
};

export default withRouter(
  connect(mapStateToProps, { loginUserAction })(Landing)
);
