import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import IndexRoute from "../app/routes/index.routes";
import AppBar from "../app/navBar/navBar";

class App extends Component {
  render() {
    return (
      <Grid container>
        <Grid item sm={12}>
          <AppBar></AppBar>
        </Grid>
        <Grid item sm={12}>
          <IndexRoute></IndexRoute>
        </Grid>
      </Grid>
    );
  }
}

export default App;
