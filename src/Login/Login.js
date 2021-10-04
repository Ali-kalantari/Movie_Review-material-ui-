// import React from 'react';

// const appStyle = {
//     height: '250px',
//     display: 'flex'
// };

// const formStyle = {
//     margin: 'auto',
//     padding: '10px',
//     border: '1px solid #c9c9c9',
//     borderRadius: '5px',
//     background: '#f5f5f5',
//     width: '220px',
//     display: 'block'
// };

// const labelStyle = {
//     margin: '10px 0 5px 0',
//     fontFamily: 'Arial, Helvetica, sans-serif',
//     fontSize: '15px',
//     textAlign:'right',
//     float:'right'
// };

// const inputStyle = {
//     margin: '5px 0 10px 0',
//     padding: '5px',
//     border: '1px solid #bfbfbf',
//     borderRadius: '3px',
//     boxSizing: 'border-box',
//     width: '100%'
// };

// const submitStyle = {
//     margin: '10px 0 0 0',
//     padding: '7px 10px',
//     border: '1px solid #efffff',
//     borderRadius: '3px',
//     background: '#3085d6',
//     width: '100%',
//     fontSize: '15px',
//     color: 'white',
//     display: 'block'
// };

// const Field = React.forwardRef(({label, type}, ref) => {
//     return (
//       <div>
//         <label style={labelStyle} >{label}</label>
//         <input ref={ref} type={type} style={inputStyle} />
//       </div>
//     );
// });

// const Form = ({onSubmit}) => {
//     const usernameRef = React.useRef();
//     const passwordRef = React.useRef();
//     const handleSubmit = e => {
//         e.preventDefault();
//         const data = {
//             username: usernameRef.current.value,
//             password: passwordRef.current.value
//         };
//         onSubmit(data);
//     };
//     return (
//       <form style={formStyle} onSubmit={handleSubmit} >
//         <Field  ref={usernameRef} label="نام کاربری" type="text" />
//         <Field  ref={passwordRef} label="رمز عبور" type="password" />
//         <div>
//           <button style={submitStyle} type="submit">Submit</button>
//         </div>
//       </form>
//     );
// };

// // Usage example:

// const Login = () => {
//     const handleSubmit = data => {
//         const json = JSON.stringify(data, null, 4);
//         console.clear();
//         console.log(json);
//     };
//     return (
//         <div>
//             <h1 style={{textAlign:'center'}}>ورود</h1>
//       <div style={appStyle}>
//         <Form onSubmit={handleSubmit} />
//       </div>
//       </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {sign} from './../actions/sign_in'
// material
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: 19,
  },
  label: {
    float: "right",
  },
  text: {
    direction: "rtl",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const logged = useSelector((state) => state.log);
  const dispatch = useDispatch();
  const history = useHistory();
  setTimeout(() => {
    alert("enter 'admin' as username and password")
    
  }, 1000);

  const Form = () => {
    const [user, setuser] = useState("");
    const [pass, setpass] = useState("");

    // const sign = () => {
    //   return {
    //     type: "SIGN_IN",
    //   };
    // };

    const submit = () => {
      if (user === "admin" && pass === "admin") {
        dispatch(sign());
        history.push("/");
      } else {
        alert("نام کاربری یا رمز ورود اشتباه است");
      }
    };

    const formsubmit = (p) => {
      p.preventDefault();
    };

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            وارد شدن به حساب کاربری
          </Typography>
          <form className={classes.form} noValidate onSubmit={formsubmit}>
            <TextField
              onChange={(event) => setuser(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="نام کاربری"
              name="email"
              autoComplete="false"
              autoFocus
              className={classes.text}
            />
            <TextField
              onChange={(event) => setpass(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.text}
            />
            <FormControlLabel
              className={classes.label}
              label="به خاطر بسپار"
              control={<Checkbox value="remember" color="primary" />}
              labelPlacement="Start"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={submit}
              className={classes.submit}
            >
              ورود
            </Button>
            <Grid container>
              <Grid item xs>
                <Link style={{ fontSize: 17 }} href="#" variant="body2">
                  فراموشی رمز
                </Link>
              </Grid>
              <Grid item>
                <Link style={{ fontSize: 17 }} href="#" variant="body2">
                  {"حساب ندارید ؟ ثبت نام کنید"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    );
  };

  return (
    <div>
      {logged === true ? (
        <h1 style={{ textAlign: "center" }}>شماقبلا وارد شده اید</h1>
      ) : (
        <Form />
      )}
    </div>
  );
}
