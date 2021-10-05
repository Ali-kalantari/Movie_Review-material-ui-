import { useState } from "react";
import { useSelector} from 'react-redux'
//material ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
// import Radio from '@material-ui/core/Radio'
// import RadioGroup from '@material-ui/core/RadioGroup'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import FormControl from '@material-ui/core/FormControl'
// import FormLabel from '@material-ui/core/FormLabel'
import Layout from "./Layout";

const drawerWidth = 240;

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    fontSize: 20,
    direction: "rtl",
  },
  button: {
    float: "right",
    fontSize: 19,
  },
  title: {
    textAlign: "center",
    color: "black",
  },
  aa: {
    float: "right",
    color: "gray",
  },
  notlogin:{
    textAlign:'center',
    marginTop:'50px'
  },
  upload: {
    float: "right",
    display: "iline",
    backgroundColor: "#3bd7c6de",
    fontSize: 21,
    color: "gray",
    "&:hover": {
      background: "skyblue",
    },
  },
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    float: "left",
  },
});

const Article = () => {
  const classes = useStyles();
  const logged = useSelector((state) => state.log);
  
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category] = useState("money");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    console.log(title,details,category)

    // if (title == '') {
    //   setTitleError(true)
    // }
    // if (details == '') {
    //   setDetailsError(true)
    // }
    // if (title && details) {
    //   fetch('http://localhost:8000/notes', {
    //     method: 'POST',
    //     headers: {"Content-type": "application/json"},
    //     body: JSON.stringify({ title, details, category })
    //   }).then(() => history.push('/'))
    // }
  };
  return (
    <>
      {
        logged ? <><Layout />
        <Container className={classes.container}>
          <Typography
            variant="h6"
            color="textSecondary"
            component="h1"
            gutterBottom
            className={classes.title}
          >
            نوشتن مقاله جدید
          </Typography>
  
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Typography className={classes.aa} variant="h6">
              {" "}
              :نام فیلم
            </Typography>
            <TextField
              className={classes.field}
              onChange={(e) => setTitle(e.target.value)}
              label=""
              variant="outlined"
              color="secondary"
              fullWidth
              required
              error={titleError}
            />
            <Typography className={classes.aa} variant="h6">
              {" "}
              :نقد فیلم
            </Typography>
  
            <TextField
              className={classes.field}
              onChange={(e) => setDetails(e.target.value)}
              label=""
              variant="outlined"
              color="secondary"
              multiline
              rows={4}
              fullWidth
              required
              error={detailsError}
            />
  
            <label htmlFor="upload-photo">
              <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
              />
  
              <Fab
                color="secondary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
                className={classes.upload}
              >
                <AddIcon /> آپلود عکس
              </Fab>
  
              {/* <Fab color="primary" size="small" component="span" aria-label="add">
      <AddIcon />
    </Fab> */}
            </label>
  
            <br />
            <br />
            <br />
            <br />
  
            {/* <Radio value="hello" />
                <Radio value="goodbye" /> */}
  
            {/* <FormControl className={classes.field}>
                  <FormLabel>Note Category</FormLabel>
                  <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                    <FormControlLabel value="money" control={<Radio />} label="Money" />
                    <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                    <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                    <FormControlLabel value="work" control={<Radio />} label="Work" />
                  </RadioGroup>
                </FormControl>
         */}
            <Button
              className={classes.button}
              type="submit"
              color="secondary"
              variant="contained"
              startIcon={<KeyboardArrowLeftIcon />}
            >
              ثبت
            </Button>
          </form>
  
          <br />
          <br />
          <br />
          <br />
  
          <br />
          <br />
          <br />
          <br />
        </Container></> :
        <>
        <Typography className={classes.notlogin} variant='h3'>برای دسترسی به این صفحه</Typography>
        <Typography className={classes.notlogin} variant='h3'>شما باید وارد حساب کاربری خود شود</Typography>
        </>
      }
    </>
  );
};

export default Article;
