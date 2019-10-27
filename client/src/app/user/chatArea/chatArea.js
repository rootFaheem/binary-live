import React, { Component } from "react";
import OpenSocket from "socket.io-client";

import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import SendIcon from "@material-ui/icons/Send";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

const styles = theme => ({
  root: {
    position: "fixed"
  },
  paper: {
    padding: "16px 8px",
    width: "100%",
    minHeight: "73vh",
    maxHeight: "73vh",
    overflow: "scroll"
  },
  groupName: {
    padding: "10px 20px",
    textAlign: "left",
    background: "#5f3f5f",
    color: "#fff",
    display: "flex",
    fontSize: "40px"
  },
  messageBox: {
    // position: "fixed",
    bottom: "0vh"
    // top: "50vh"
  },
  msg: {
    paddingTop: "15px"
  },
  msgLeft: {
    textAlign: "left"
  },
  msgRight: {
    textAlign: "right"
  }
});

class ChatArea extends Component {
  state = {
    messagesList: [],
    message: ""
  };

  componentDidMount = () => {
    const socket = OpenSocket("/");
    socket.on("messages", data => {
      console.log("data", data);
    });
  };

  handleMessageChanged = e => {
    e.preventDefault();

    this.setState({
      message: e.target.value
    });
  };

  handleMessageSend = e => {
    let message = this.state.message;
    let messagesList = this.state.messagesList;
    messagesList.push(message);

    // clear the message area after send
    this.setState({
      messagesList,
      message: ""
    });
    console.log("Message state:", this.state);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container item sm={12}>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Paper className={classes.groupName}>
              <ChevronLeft></ChevronLeft>
              <Typography variant="h6" component="h6">
                SpaceX Group
              </Typography>
            </Paper>
            {this.state.messagesList.map((msg, i) => (
              <Typography
                key={i}
                variant="h5"
                component="h3"
                className={(classes.msgLeft, classes.msg)}
              >
                {msg}
              </Typography>
            ))}
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <TextField
            id="standard-full-width"
            //   label="Label"
            style={{ margin: 8 }}
            placeholder="Eneter a message"
            //   helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SendIcon onClick={this.handleMessageSend} />
                </InputAdornment>
              )
            }}
            multiline={true}
            rows={3}
            className={classes.messageBox}
            value={this.state.message}
            onChange={this.handleMessageChanged}
            // position={"bottom"}
          ></TextField>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ChatArea);
