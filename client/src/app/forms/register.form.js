import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { registerUserAction } from "../../store/actions/auth.action";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0px",
    // position: "absolute",
    top: "100%",
    "-ms-transform": "translateY(-50%)",
    transform: "translateY(20%)",
    // border: "2px solid #eee",
    padding: "50px 10px",
    borderRadius: "8px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#0080ff"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  error: {
    color: "red"
  }
});

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",

    nameError: "",
    emailError: "",
    passwordError: ""
  };

  nameChangedhandler = e => {
    this.setState({
      name: e.target.value,
      nameError: ""
    });
  };

  emailChangedhandler = e => {
    this.setState({
      email: e.target.value,
      emailError: ""
    });
  };

  passwordChangedhandler = e => {
    this.setState({
      password: e.target.value,
      passwordError: ""
    });
  };

  signInHandler = e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    if (name === "") {
      return this.setState({
        nameError: "name is required"
      });
    }
    if (email === "") {
      return this.setState({
        emailError: "email is required"
      });
    }
    if (password === "") {
      return this.setState({
        passwordError: "password is required"
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={this.signInHandler}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={this.nameChangedhandler}
              helperText={
                this.state.nameError ? (
                  <span className={classes.error}> {this.state.nameError}</span>
                ) : null
              }
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.emailChangedhandler}
              helperText={
                this.state.emailError ? (
                  <span className={classes.error}>
                    {" "}
                    {this.state.emailError}
                  </span>
                ) : null
              }
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.passwordChangedhandler}
              helperText={
                this.state.passwordError ? (
                  <span className={classes.error}>
                    {" "}
                    {this.state.passwordError}
                  </span>
                ) : null
              }
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              style={{
                background: "#0080ff",
                color: "#fff"
              }}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ registerReducer }) => {
  return {
    _auth: registerReducer
  };
};

export default withRouter(
  connect(mapStateToProps, { registerUserAction })(withStyles(styles)(Register))
);
