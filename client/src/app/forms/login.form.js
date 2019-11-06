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

import { loginUserAction } from "../../store/actions/auth.action";

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
    margin: 0,
    position: "absolute",
    top: "50%",
    "-ms-transform": "translateY(-50%)",
    transform: "translateY(-50%)",
    border: "2px solid #eee",
    padding: "50px 30px",
    borderRadius: "8px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#0080ff"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  error: {
    color: "red"
  }
});

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
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

    const { email, password } = this.state;

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
    const data = {
      email,
      password,
      type: "login"
    };

    console.log("data", data);
    // this.props.loginUserAction(data);
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
            Sign in
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
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  return {
    _auth: loginReducer
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { loginUserAction }
  )(withStyles(styles)(SignIn))
);
