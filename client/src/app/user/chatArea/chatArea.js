import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import SendIcon from "@material-ui/icons/Send";

const styles = theme => ({
  root: {
    position: "fixed"
  },
  paper: {
    padding: "16px 8px",
    width: "100%",
    minHeight: "70vh"
  },
  messageBox: {
    // position: "fixed",
    bottom: "0vh"
    // top: "50vh"
  },
  msg: {
    textAlign: "left"
  }
});

class ChatArea extends Component {
  state = {
    messagesList: [],
    message: ""
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
            {this.state.messagesList.map((msg, i) => (
              <Typography
                key={i}
                variant="h5"
                component="h3"
                className={classes.msg}
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
