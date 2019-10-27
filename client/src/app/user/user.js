import React, { Component } from "react";
import OpenSocket from "socket.io-client";

import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import OnlineUserList from "./onlineUserList/onlineUserList";
import ChatArea from "./chatArea/chatArea";

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
      { name: "Faheem Ahmad", imgURL: "" },
      {
        name: "Elon Musk",
        imgURL: ""
      },
      {
        name: "Jeff Bezos",
        imgURL: ""
      },
      {
        name: "Peter Theil",
        imgURL: ""
      },
      {
        name: "Faisal Computer",
        imgURL: ""
      }
    ]
  };

  componentDidMount = () => {
    let socket = OpenSocket("/");
    socket.on("messages", data => {
      console.log("data", data);
    });
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
              <ChatArea></ChatArea>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(User);
