import React, { Component } from "react";
import OpenSocket from "socket.io-client";

import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import OnlineUserList from "./onlineUserList/onlineUserList";

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
  state = {
    users: [
      { name: "faheem", imgURL: "" },
      {
        name: "musk",
        imgURL: ""
      },
      {
        name: "jeff",
        imgURL: ""
      },
      {
        name: "peter",
        imgURL: ""
      }
    ]
  };

  componentDidMount = () => {
    OpenSocket("/");
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid container item xs={12} spacing={6}>
            <Grid item xs={4}>
              <OnlineUserList users={this.state.users}></OnlineUserList>
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
