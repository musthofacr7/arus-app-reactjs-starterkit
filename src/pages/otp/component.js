import React, { useState } from "react";
import { Container, Typography, Box } from "@material-ui/core";
import LogoOtp from "../../assets/Group 131.png";
import Grid from "@material-ui/core/Grid";

function SplashScreen(props) {
  const { classes } = props;
  const [otp, setOtp] = useState("");

  const handleChange = otp => {
    setOtp({ otp });
  };
  return (
    <Container maxWidth="xs" className={classes.Container}>
      <Grid className={classes.background}>
        <img src={LogoOtp} alt="login otp" className={classes.otp} />
      </Grid>
    </Container>
  );
}

export default SplashScreen;
