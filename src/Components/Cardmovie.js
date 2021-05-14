import React from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
  Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const usestyle = makeStyles((theme) => ({
  images: {
    width: "100%",
    height: 400,
  },
  des: {
    direction: "rtl",
    fontSize: 15,
    fontWeight: 700,
  },
  share: {
    fontWeight: 700,
    color: "#012121",
  },
}));

const Cardmovie = (props) => {
  const classes = usestyle();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            object-fit
            className={classes.images}
            alt="Contemplative Reptile"
            height="140"
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.des}
            >
              {props.des}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" className={classes.share}>
            اشتراک
          </Button>
          <Button size="small" color="primary" className={classes.share}>
            بیشتر بخوانید
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default Cardmovie;
