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
import Avatar from "@material-ui/core/Avatar";
import VpnKeyTwoToneIcon from "@material-ui/icons/VpnKeyTwoTone";
import { makeStyles } from "@material-ui/core/styles";
// images
import lap from "./../images/lap.jpg";
import logan from "./../images/logan.jpg";
import father from "./../images/father.jpg";
import phantom from "./../images/phantom.jpg";
import avatar from "./../images/avatar.png";
import greenbook from "./../images/greenbook.jpg";
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

  const [carddata, setcarddata] = useState([
    {
      image: logan,
      title: "Logan",
      des: "یک فیلم ابرقهرمانی آمریکایی محصول سال ۲۰۱۷ به نویسندگی و کارگردانی جیمز منگولد است که بر اساس شخصیت ولورین از شرکت مارول کامیکس با هنرپیشگی هیو جکمن ساخته شده‌است.",
    },
    {
      image: greenbook,
      title: "Greenbook",
      des: ` فیلمی در ژانر کمدی-درام به کارگردانی پیتر فارلی است که در سال ۲۰۱۸ منتشر شد.
      فیلم نقدهای مثبتی دریافت کرده که در آن‌ها بازی علی و مورتنسن مورد ستایش قرار گرفته‌اند.`,
    },
    {
      image: phantom,
      title: "Phantom Thread",
      des: "فیلمی آمریکایی در سبک درام-تاریخی به کارگردانی و نویسندگی پل توماس اندرسن است که موضوع آن به مد لباس در لندن دهه ۱۹۵۰ برمی‌گردد.",
    },
    {
      image: father,
      title: "Father",
      des: " یک فیلم سینمایی درام محصول مشترک فرانسه و انگلستان تولید سال ۲۰۲۰ به نویسندگی و کارگردانی فلوریان زلر است و بر اساس نمایشنامه سال ۲۰۱۲ خود به نام پدر ساخته شده‌است.",
    },
  ]);

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
                  fontWeight: 600,
                  fontSize: 20,
                  textDecoration: "none",
                  color: "black",
                  backgroundColor: "#b9e6f8",
                  height: "100%",
                  cursor: "pointer",
                  paddingBottom: 9,
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
