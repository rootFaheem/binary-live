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
    backgroundColor: theme.palette.background.paper
  }
}));

const OnlineUserList = props => {
  const classes = useStyles();

  console.log("props", props);
  return (
    <List dense className={classes.root}>
      {props.users.map((item, index) => {
        return (
          <ListItem key={index} button>
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
