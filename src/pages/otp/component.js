import React, { useState } from "react";
import { Container, Typography, Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Toolbar } from "@material-ui/core";
import LogoOtp from "../../assets/Group 131.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

function SplashScreen(props) {
  const { classes } = props;
  const [otp, setOtp] = useState("");

  const handleChange = otp => {
    setOtp({ otp });
  };

  const handleBack = () => {
    props.history.push("/login");
  };
  return (
    <Container maxWidth="xs" className={classes.Container}>
      <Grid className={classes.background}>
        <AppBar
          position="static"
          className={classes.appbar}
          onClick={handleBack}
        >
          <Toolbar>
            <ArrowBackIcon />
          </Toolbar>
        </AppBar>
        <img src={LogoOtp} alt="login otp" className={classes.otp} />
      </Grid>
      <Typography className={classes.text}>Nomor Telepon</Typography>
      <Typography className={classes.kode}>
        4-digit kode OTP akan dikirimkan via SMS ke nomor telepon Anda{" "}
      </Typography>

      <Input
        placeholder="Phone Number"
        fullWidth={true}
        style={{ maxWidth: "90%" }}
        margin="normal"
        inputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography>+62</Typography>
            </InputAdornment>
          )
        }}
      />

      <Box className={classes.buttonBoxBottom}>
        <Button
          disableRipple={true}
          id="submit-button"
          className={classes.buttonBottom}
          style={{
            backgroundColor: "#F7A647"
          }}
          // onClick={handleLogin}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} className={classes.gridButton}>
              <Typography className={classes.textButtonBottom}>
                Lanjutkan
              </Typography>
            </Grid>
          </Grid>
        </Button>
      </Box>
    </Container>
  );
}

export default SplashScreen;
