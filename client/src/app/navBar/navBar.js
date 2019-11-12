import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { authCheckAction } from "../../store/actions/auth.action";

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
  }
});

class PrimarySearchAppBar extends Component {
  componentDidMount = () => {
    const graphqlQuery = {
      query: `{
      authCheckUser(type:"authCheck") {
        isLoggedIn
        authCheck
        userId
        name
        email
      }
    }`
    };

    this.props.authCheckAction(JSON.stringify(graphqlQuery));
  };

  render() {
    const { classes } = this.props;

    console.log("this.props._authCheck:", this.props._authChck);

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
                {/* <div className={classes.search}> */}
                {/* <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div> */}
                {/* <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                  /> */}
                {/* </div> */}
                {/* <div className={classes.sectionDesktop}>
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>

                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </div> */}
              </Toolbar>
            </Container>
          </AppBar>
          {/* {renderMobileMenu}
          {renderMenu} */}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ authCheckReducer }) => {
  return {
    _authCheck: authCheckReducer
  };
};

export default withRouter(
  connect(mapStateToProps, { authCheckAction })(
    withStyles(styles)(PrimarySearchAppBar)
  )
);
