import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #bbb",
    borderRadius: "8px",
    // boxShadow: "5px 5px #eee",
    height: "90vh",
    overflow: "scroll"
  },
  itemMargin: {
    marginLeft: "30px"
  }
}));

const OnlineUserList = props => {
  const classes = useStyles();

  return (
    <List dense className={classes.root} m={10}>
      {props.users.map((item, index) => {
        return (
          <ListItem key={index} button className={classes.itemMargin}>
            <ListItemAvatar>
              <Avatar alt="image" src={item.imgURL} />
            </ListItemAvatar>
            <ListItemText id={index} primary={item.name} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default OnlineUserList;
