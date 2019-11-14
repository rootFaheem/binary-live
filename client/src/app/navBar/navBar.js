import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { loginUserAction } from "../../store/actions/auth.action";

const styles = theme => ({
  root: {
    backgroundColor: "#0080ff"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  authButton: {
    textDecoration: "none",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  buttonColor: { color: "#fff" }
});

class PrimarySearchAppBar extends Component {
  // componentDidMount = () => {
  //   let graphqlQuery = {
  //     query: `{
  //     authCheckUser(type:"authCheck") {
  //       isLoggedIn
  //       authCheck
  //       userId
  //       name
  //       email
  //     }
  //   }`
  //   };

  //   let data = {
  //     graphqlQuery: JSON.stringify(graphqlQuery),
  //     type: "login"
  //   };
  //   this.props.loginUserAction(data);
  // };
  render() {
    const { classes } = this.props;

    const guestLink = (
      <Fragment>
        <Link to="/login" className={classes.authButton}>
          <Button variant="outlined" className={classes.buttonColor}>
            Login
          </Button>
        </Link>
        <Link to="/register" className={classes.authButton}>
          <Button variant="outlined" className={classes.buttonColor}>
            Register
          </Button>
        </Link>
      </Fragment>
    );

    const authLink = (
      <Fragment>
        <Typography> {this.props._auth.name}</Typography>
        <AccountCircleIcon></AccountCircleIcon>
      </Fragment>
    );

    return (
      <div className={classes.grow}>
        <Grid>
          <AppBar position="static" className={classes.root}>
            <Container>
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                  Binary Live
                </Typography>

                <div className={classes.grow} />

                {this.props._auth && this.props._auth.isLoggedIn
                  ? authLink
                  : guestLink}
              </Toolbar>
            </Container>
          </AppBar>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  return {
    _auth: loginReducer
  };
};

export default withRouter(
  connect(mapStateToProps, { loginUserAction })(
    withStyles(styles)(PrimarySearchAppBar)
  )
);
