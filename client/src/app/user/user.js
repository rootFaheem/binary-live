import React, { Component } from "react";
import OpenSocket from "socket.io-client";

import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: "20px",
    textAlign: "center",
    color: "#717171"
  }
});

class User extends Component {
  componentDidMount = () => {
    OpenSocket("/");
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>BINARY-LIVE</Paper>
          </Grid>
          <Grid container item xs={12} spacing={6}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>ONLINE USERS LIST</Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}>CHAT AREA</Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(User);
