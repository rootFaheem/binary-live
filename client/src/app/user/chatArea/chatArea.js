import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import SendIcon from "@material-ui/icons/Send";

const styles = theme => ({
  root: {
    padding: "200px"
  }
});

class ChatArea extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root}> CHAT AREA</Paper>
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
                <SendIcon />
              </InputAdornment>
            )
          }}
        ></TextField>
      </div>
    );
  }
}

export default withStyles(styles)(ChatArea);
