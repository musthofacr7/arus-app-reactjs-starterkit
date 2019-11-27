import React from "react";
import {
  Container,
  Grid,
  Typography,
  CssBaseline,
  Button,
  Box
} from "@material-ui/core";
import Profile from "../../assets/Ellipse 8.png";
import BottomNavigation from "../../component/bottom-navigation";
import AppBar from "../../component/appbar";
import { Link } from "react-router-dom";
import User from "../../assets/users.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xs" className={classes.Container}>
          <AppBar title="Profile" />

          <Grid container spacing={0} className={classes.gridContainer}>
            <Grid item xs={12} className={classes.gridUpper}>
              <Grid container spacing={0} className={classes.containerProfil}>
                <Grid item xs={2}>
                  <img src={Profile} className={classes.image} alt="avatar"/>
                </Grid>
                <Grid item xs={5} className={classes.gridName} align="center">
                  <Typography className={classes.name}>
                    Kina Gatie Putri
                  </Typography>

                  <Typography className={classes.nik}>
                    NIK : 0987098709870987
                  </Typography>
                </Grid>
                <Grid item xs={4} className={classes.gridEdit} align="center">
                  <Link className={classes.link} to="/edit-profil">
                    Edit Profile
                  </Link>
                </Grid>
                <Grid item xs={1} align="center"></Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={0} className={classes.gridTwo}>
            <Grid item xs={2} className={classes.icon}>
              <img src={User} alt="user" />
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.text}>Anggota Keluarga</Typography>
            </Grid>
            <Grid item xs={5} className={classes.arrow}>
              <Link className={classes.linkArrow} to="/list-anggota">
                <ArrowForwardIosIcon className={classes.icon} />
              </Link>
            </Grid>
            <Grid item xs={0} className={classes.arrow}></Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridButton}>
            <Box className={classes.buttonBox}>
              <Button
                disableRipple={true}
                id="submit-button"
                className={classes.button}
              >
                Keluar
              </Button>
            </Box>
          </Grid>

          <BottomNavigation />
        </Container>
      </React.Fragment>
    );
  }
}

export default component;
