import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { register } from "../../services/register";
import { login } from "../../services/login";
import swal from "sweetalert";

function RegisterApp(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    nik: parseInt(),
    errorPassword: "",
    errorEmail: ""
  });
  console.log(typeof data.nik);
  const [errMail, setErrMail] = useState(false);
  const [errPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errPhone, setErrPhone] = useState(false);
  const [errNik, setErrNik] = useState(false);
  const [errConfirmation, setErrConfirmation] = useState(false);

  const handleBack = () => {
    props.history.push("/login");
  };

  const handleChange = async e => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
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

  useEffect(() => {}, []);
  const handleClick = async () => {
    if (data.password.length < 7) {
      setErrorPassword(true);
    } else if (data.nik.length < 7) {
      setErrNik(true);
    } else if (data.phone.length < 9) {
      setErrPhone(true);
    } else if (data.password != data.password_confirmation) {
      setErrConfirmation(true);
    } else {
      register(data)
        .then(res => {
          console.log(res);
          const loginData = {
            email: data.email,
            password: data.password
          };
          console.log(loginData);
          login(loginData).then(res => {
            localStorage.setItem("user", JSON.stringify(res.user));
            localStorage.setItem("userToken", "Bearer " + res.access_token);
            localStorage.setItem("login", true);
            props.history.push("/");
            swal("Good job!", "You registered!", "success");
            console.log(res);
            props.history.push("/");
          });
        })
        .catch(error => {
          if (error) {
            swal("Fill the blank please!");
          }
          if (error.response.statusText == "Unauthenticated") {
            swal(
              "Ups!",
              "The token is expired or refresh the page, please",
              "warning"
            );
          }
          if (error.response.statusText == "Unauthenticated") {
            swal(
              "Ups!",
              "The token is expired or refresh the page, please",
              "warning"
            );
          }
        });
    }
  };
  const handleSignIn = () => {
    props.history.push("./login");
  };
  const { classes } = props;
  return (
    <Container maxWidth="xs" className={classes.Container}>
      <AppBar position="static" className={classes.appbar} onClick={handleBack}>
        <Toolbar>
          <ArrowBackIcon />
          <Typography className={classes.registrasi}> Registration </Typography>
        </Toolbar>
      </AppBar>

      <div align="center">
        <Grid item xs className={classes.nama}>
          <TextField
            name="name"
            label="Nama Lengkap"
            value={data.name}
            onChange={handleChange}
            fullWidth={true}
            style={{ maxWidth: "90%" }}
          />
        </Grid>

        <Grid item className={classes.textField}>
          <TextField
            error={errMail}
            fullWidth={true}
            onChange={handleChange}
            value={data.email}
            name="email"
            type="email"
            label="Email"
            fullWidth={true}
            style={{ maxWidth: "90%" }}
          />
        </Grid>

        <Grid item className={classes.textField}>
          <TextField
            helperText="Sedikitnya 8 Karakter"
            error={errPassword}
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            onChange={handleChange}
            value={data.password}
            fullWidth={true}
            style={{ maxWidth: "90%" }}
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

        <Grid item className={classes.textField}>
          <TextField
            error={errConfirmation}
            label="Konfirmasi Password"
            type={showPassword ? "text" : "password"}
            name="password_confirmation"
            onChange={handleChange}
            value={data.password_confirmation}
            fullWidth={true}
            style={{ maxWidth: "90%" }}
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

        <Grid item className={classes.textField}>
          <TextField
            type="number"
            helperText="Setidaknya Memiliki 10 Karakter"
            error={errPhone}
            label="Nomor Telepon"
            name="phone"
            onChange={handleChange}
            value={data.phone}
            fullWidth={true}
            style={{ maxWidth: "90%" }}
          />
        </Grid>

        <Grid item className={classes.textField}>
          <TextField
            type="number"
            label="NIK"
            name="nik"
            onChange={handleChange}
            value={data.nik}
            error={errNik}
            fullWidth={true}
            style={{ maxWidth: "90%" }}
          />
        </Grid>

        <Grid item className={classes.gridBottom}>
          <Button
            style={{
              backgroundColor: "#F7A647"
            }}
            className={classes.registerButton}
            onClick={handleClick}
          >
            Register
          </Button>
        </Grid>
        <Grid item>
          <Typography className={classes.akun}>
            Sudah Punya Akun ?{" "}
            <b onClick={handleSignIn} style={{ color: "#F7A647" }}>
              Login
            </b>
          </Typography>
        </Grid>
      </div>
    </Container>
  );
}

export default withRouter(RegisterApp);
