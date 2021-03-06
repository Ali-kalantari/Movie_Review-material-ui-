import {
  Container,
  Grid,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import Layout from "./Layout";
import { makeStyles } from "@material-ui/core";

import greenbook from "./../images/greenbook.jpg";
import { useSelector } from "react-redux";
const drawerWidth = 240;

const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    float: "left",
  },
  share: {
    fontWeight: 700,
    fontSize: 18,
    display: "block",
    color: "#012121",
  },
  notlogin:{
    textAlign:'center',
    marginTop:'50px'
  },
  action: {
    justifyContent: "space-around",
  },
  root: {
    //    backgroundColor:'green'
    margin: "8px",
  },
});

const Written = () => {
  const classes = useStyles();
  const logged = useSelector((state) => state.log);


  return (
    <>
      {
        logged ?<> <Layout />
        <Container className={classes.container}>
          <Grid container>
            <Grid item md={4} sm={6} xs={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.images}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={greenbook}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      GreenBook
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.des}
                    >
                      فیلمی در ژانر کمدی-درام به کارگردانی پیتر فارلی است که در
                      سال ۲۰۱۸ منتشر شد. فیلم نقدهای مثبتی دریافت کرده که در آن‌ها
                      بازی علی و مورتنسن مورد ستایش قرار گرفته‌اند.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.action}>
                  <Button size="large" color="primary" className={classes.share}>
                    نمایش کامل
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container></> :<>
          <Typography className={classes.notlogin} variant='h3'>برای دسترسی به این صفحه</Typography>
         <Typography className={classes.notlogin} variant='h3'>شما باید وارد حساب کاربری خود شود</Typography>
         </>
      }
    </>
  );
};

export default Written;
