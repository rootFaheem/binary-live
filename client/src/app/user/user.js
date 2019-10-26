import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
});

class VerticalTabs extends Component {
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
  render() {
    const classes = this.props;

    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={"Item 1"}
          onChange
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={"Item 1"} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={"Item 1"} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={"Item 1"} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={"Item 1"} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={"Item 1"} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={"Item 1"} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={"Item 1"} index={6}>
          Item Seven
        </TabPanel>
      </div>
    );
  }
}
export default withStyles(styles)(VerticalTabs);

// import React, { Component } from "react";
// import OpenSocket from "socket.io-client";

// import { withStyles } from "@material-ui/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

// import OnlineUserList from "./onlineUserList/onlineUserList";

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: "20px",
//     textAlign: "center",
//     color: "#717171"
//   }
// });

// class User extends Component {
//   state = {
//     users: [
//       { name: "Faheem Ahmad", imgURL: "" },
//       {
//         name: "Elon Musk",
//         imgURL: ""
//       },
//       {
//         name: "Jeff Bezos",
//         imgURL: ""
//       },
//       {
//         name: "Peter Theil",
//         imgURL: ""
//       },
//       {
//         name: "Faisal Computer",
//         imgURL: ""
//       }
//     ]
//   };

//   componentDidMount = () => {
//     OpenSocket("/");
//   };
//   render() {
//     const { classes } = this.props;
//     return (
//       <div className={classes.root}>
//         <Grid container spacing={3}>
//           <Grid container item xs={12} spacing={6}>
//             <Grid item xs={4}>
//               <OnlineUserList users={this.state.users}></OnlineUserList>
//             </Grid>
//             <Grid item xs={8}>
//               <Paper className={classes.paper}>CHAT AREA</Paper>
//             </Grid>
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(User);
