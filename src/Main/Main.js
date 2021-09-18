import React, { useState } from "react";
import { Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// material components
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VpnKeyTwoToneIcon from "@material-ui/icons/VpnKeyTwoTone";
import Avatar from "@material-ui/core/Avatar";
// data
import {data} from './../data';
// images
import lap from "./../images/lap.jpg";

import avatar from "./../images/avatar.png";
// components
import MyPagination from "./Pagination";
import Cardmovie from "./../Components/Cardmovie";

const usestyle = makeStyles((theme) => ({
  appbar: {
    background: "#fff",
  },
  span: {
    color: "#045FE0",
    display: "inline",
  },
  hero: {
    background: `url(${lap})`,
    //    backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    height: 400,
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogcontainer: {
    paddingTop: theme.spacing(3),
  },
  blogtitle: {
    paddingBottom: theme.spacing(3),
    textAlign: "center",
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    float: "left",
  },
}));

const Main = () => {
  const logged = useSelector((state) => state.log);
  const classes = usestyle();

  const [carddata] = useState(data)
    

  const Login = () => {
    const style = {
      fontSize: 19,
      textDecoration: "none",
      color: "black",
      cursor: "pointer",
      fontWeight: 500,
    };
    return (
      <>
        <Link to="/my_articles" style={style} color="inherit">
          <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
        </Link>
      </>
    );
  };

  return (
    <>
      <div>
        <AppBar className={classes.appbar} position="static">
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Typography variant="h5">
              AL
              <Typography variant="h5" className={classes.span}>
                i
              </Typography>
            </Typography>
            {logged === true ? (
              <Login />
            ) : (
              <Link
                to="/login"
                style={{
                  width:'190px',
                  fontWeight: 600,
                  fontSize: 20,
                  textDecoration: "none",
                  color: "black",
                  backgroundColor: "#b9e6f8",
                  height: "100%",
                  cursor: "pointer",
                  paddingBottom: 9,
                  display:'flex',
                  alignItems:'center',
                  marginLeft:'10px',
                  justifyContent:'space-around'
                }}
              >
                {" "}
                <VpnKeyTwoToneIcon fontSize="large" />
                ورود به پنل کاربری
              </Link>
            )}
          </Toolbar>
        </AppBar>
        <Box className={classes.hero}>
          <Box>My Blog</Box>
        </Box>
        <Container className={classes.blogcontainer}>
          <Typography variant="h4" className={classes.blogtitle}>
            مقالات
          </Typography>
          <Grid container spacing={3}>
            {carddata.map((item, index) => {
              return (
                <Grid item md={4} sm={6} xs={12}>
                  <Cardmovie
                    image={item.image}
                    title={item.title}
                    des={item.des}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
      <MyPagination />
      <br />
      <br />
    </>
  );
};
export default Main;
