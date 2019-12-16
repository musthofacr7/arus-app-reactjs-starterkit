import React, { useState, useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { login } from "../../services/login";
import AppBar from "@material-ui/core/AppBar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Box from "@material-ui/core/Box";
import { Toolbar } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Ilustrasi from "../../assets/login-ilustrasi.png";
import { AuthContext } from "../../context/auth";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import swal from "sweetalert";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailClick, setEmailClick] = useState(false);
  const [data, setData] = useContext(AuthContext);
  const [errMail, setErrMail] = useState(false);
  const [errPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const Toggle = () => {
    var temp = document.getElementById("txtPass");
    if (temp.type === "password") {
      temp.type = "text";
    } else {
      temp.type = "password";
    }
  };
  const handleBack = () => {
    props.history.push("/login");
  };
  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
  }, []);
  const handleBackLogin = () => {
    props.history.push("/login");
  };
  const handleSignUp = () => {
    props.history.push("/register");
  };
  const handleClick = () => {
    setEmailClick(true);
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);

    console.log(showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password
    };

    login(data)
      .then(res => {
        localStorage.setItem("userToken", "Bearer " + res.access_token);
        console.log(res);
        setData(res.user);
        localStorage.setItem("user", JSON.stringify(res.user));

        localStorage.setItem("login", true);
        swal("Great!", "You logged!", "success");
        props.history.push("/");
        console.log(res);
      })
      .catch(error => {
        if (error) {
          return console.log(error);
        }
      });
  };

  const { classes, title } = props;
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Grid className={classes.container}>
        <AppBar
          position="static"
          className={classes.appbar}
          onClick={handleBack}
        >
          <Toolbar>
            <ArrowBackIcon />
            <Typography className={classes.login}> Login</Typography>
          </Toolbar>
        </AppBar>
        <img src={Ilustrasi} alt="" />

        <div align="center">
          <Grid item xs className={classes.email}>
            <TextField
              error={errMail}
              name="email"
              type="email"
              label="Username"
              value={email}
              onChange={handleChangeEmail}
              fullWidth={true}
              style={{ maxWidth: "90%" }}
            />
          </Grid>
          <Grid item xs className={classes.password}>
            <TextField
              error={errPassword}
              name="password"
              label="Password"
              style={{ maxWidth: "90%" }}
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              onChange={handleChangePassword}
              fullWidth={true}
              style={{ maxWidth: "90%" }}
              type={"password"}
              id="txtPass"
              margin="normal"
              placeholder="your password goes here..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{
                        color: "#666666",
                        padding: 0,
                        margin: 0
                      }}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>

          <Box className={classes.buttonBoxBottom}>
            <Button
              disableRipple={true}
              id="submit-button"
              className={classes.buttonBottom}
              style={{
                backgroundColor: "#F7A647"
              }}
              onClick={handleLogin}
            >
              <Grid container spacing={0}>
                <Grid item xs={12} className={classes.gridButton}>
                  <Typography className={classes.textButtonBottom}>
                    Lanjut
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Box>
          <Box className={classes.buttonBoxBottom}>
            <Button
              disableRipple={true}
              id="submit-button"
              className={classes.buttonBottom}
              style={{
                backgroundColor: "#F7A647"
              }}
              onClick={handleBackLogin}
            >
              <Grid container spacing={0}>
                <Grid item xs={12} className={classes.gridButton}>
                  <Typography className={classes.textButtonBottom}>
                    Kembali Login
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Box>
        </div>
        <Grid item align="center">
          <Typography style={{ marginTop: "1em" }}>
            Belum Punya Akun ?{" "}
            <b onClick={handleSignUp} style={{ color: "#F7A647" }}>
              Daftar
            </b>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
