import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import PrivateRoute from "./privateRoutes/privateRoutes";
import { authCheckAction } from "../../store/actions/auth.action";

import Home from "../home/home";
import LoginForm from "../forms/login.form";
import RegisterForm from "../forms/register.form";

import ChatList from "../user/user";

class Landing extends Component {
  // componentDidMount = () => {
  //   const graphqlQuery = {
  //     query: `{
  //     authCheckUser(type:"authCheck") {
  //       isLoggedIn
  //       authCheck
  //       userId
  //       name
  //       email
  //     }
  //   }`
  //   };
  //   this.props.authCheckAction(JSON.stringify(graphqlQuery));
  // };

  render() {
    console.log("_authCheck", this.props._authCheck);
    return (
      <div>
        <Switch>
          <PrivateRoute
            path="/chatlist"
            exact
            component={ChatList}
            isLoggedIn={
              this.props._authCheck && this.props._authCheck.isLoggedIn
            }
          ></PrivateRoute>

          {this.props._authCheck && this.props._authCheck.isLoggedIn ? (
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

const mapStateToProps = ({ authCheckReducer }) => {
  return {
    _authCheck: authCheckReducer
  };
};

export default withRouter(
  connect(mapStateToProps, { authCheckAction })(Landing)
);
