import React from "react";
import { useHistory, useLocation } from "react-router-dom";
// material ui components
import { makeStyles } from "@material-ui/core";
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Avatar,
  ListItemText,
  Drawer,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
// images
import avatar from "./../images/avatar.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      float: "right",
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      // background: "#f4f4f4",
      marginTop:'10px',
      marginBottom:'10px',
      background: "lightgray",
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: "100%",
      marginLeft: drawerWidth,
      backgroundColor: "#b2b1b1",
    },
    link:{
      display:'flex',
      justifyContent:'flex-start',
      background:'white',
      marginTop:'10px',
      marginBottom:'10px',
      '&:hover':{ background:'lightgray'}
    },
    date: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    text: {
      fontSize: 19,
      display:'flex',
      justifyContent:'end',
      marginRight:'5px'
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname.substring(1))

  const menuItems = [
    {
      text: "مقاله های نوشته شده",
      icon: <SubjectOutlined color="secondary" />,
      path: "/my_articles",
    },
    {
      text: "نوشتن مقاله",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/write_article",
    },
    {
      text: "برگت به صفحه اصلی",
      icon: <KeyboardBackspaceIcon color="secondary" />,
      path: "/",
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Typography variant="h3">
            <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />

          </Typography>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="right"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname.substring(1) === item.path.substring(1) ? classes.active : classes.link}
            >
              <ListItemText className={classes.text} primary={item.text} />
              <ListItemIcon>{item.icon}</ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
