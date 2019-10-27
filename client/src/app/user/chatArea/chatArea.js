import React, { Component } from "react";
import OpenSocket from "socket.io-client";
import axios from "axios";

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
    let { messagesList } = this.state;

    const socket = OpenSocket("/");
    socket.on("messages", res => {
      if (res.action === "messages update") {
        messagesList.push(res.data.message);
        this.setState({
          messagesList,
          message: ""
        });
      }
    });
  };

  handleMessageChanged = e => {
    e.preventDefault();

    this.setState({
      message: e.target.value
    });
  };

  handleMessageSend = async e => {
    let { message } = this.state;

    const data = { userId: "UID-01", message };
    let response = await axios.post(
      "http://localhost:8080/api/chat/send-message",
      data
    );
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
