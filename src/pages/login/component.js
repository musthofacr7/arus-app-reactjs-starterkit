import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import LoginImage from "../../assets/Background.png";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import GoogleLogo from "../../assets/googlelogo.png";
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.container}>
        <Grid className={classes.container}>
          <Grid item xs={12} className={classes.gridItemTop}>
            <img src={LoginImage} className={classes.image} alt="login" />
          </Grid>

          <Grid item xs={12} className={classes.gridItemBottom}>
            <Grid container spacing={0} className={classes.gridBottom}>
              <Grid item xs={12} className={classes.textTop}>
                Login
              </Grid>

              <Grid item xs={12}>
                <Box className={classes.buttonBox}>
                  <Button
                    disableRipple={true}
                    id="submit-button"
                    className={classes.button}
                  >
                    <Grid container spacing={0}>
                      <Grid item xs={2} className={classes.gridButton}>
                        <img src={GoogleLogo} className={classes.logoGoogle} alt="google" />
                      </Grid>

                      <Grid item xs={10} className={classes.gridButton}>
                        <Typography className={classes.textButton}>
                          Masuk Dengan Akun Google
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
                  >
                    <Grid container spacing={0}>
                      <Grid item xs={2}>
                        <svg
                          width="14"
                          height="20"
                          viewBox="0 0 14 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.1667 1.66666H2.83332C1.91285 1.66666 1.16666 2.41285 1.16666 3.33332V16.6667C1.16666 17.5871 1.91285 18.3333 2.83332 18.3333H11.1667C12.0871 18.3333 12.8333 17.5871 12.8333 16.6667V3.33332C12.8333 2.41285 12.0871 1.66666 11.1667 1.66666Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Grid>

                      <Grid item xs={10} className={classes.gridButton}>
                        <Typography className={classes.textButtonBottom}>
                          Masuk Dengan Nomor HP
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default component;
