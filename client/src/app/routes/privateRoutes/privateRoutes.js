import React from "react";
import { Route } from "react-router-dom";

// import Landing from "../../home/landing/landing";

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLoggedIn === true ? <Component {...props} /> : null)}
  />
);

export default PrivateRoute;
