import React, { Component } from "react";
import OpenSocket from "socket.io-client";

import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const myStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

class User extends Component {
  componentDidMount = () => {
    OpenSocket("/");
  };
  render() {
    const { classes } = this.props.myStyles();
    return (
      <div className={classes.root}>
        <Grid conainter spacing={3}>
          <Grid item xs={12}>
            <Paper>BINARY-LIVE</Paper>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={4}>
              ONLINE USERS
            </Grid>
            <Grid item xs={8}>
              CHAT AREA
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default User;
