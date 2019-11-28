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
        <Container maxWidth="xs" className={classes.container}>
          <AppBar title="Profile" />
          <Grid container spacing={0} className={classes.container}>
            <Grid item xs={12} className={classes.gridItemTop}>
              <Grid container spacing={0} className={classes.containerProfil}>
                <Grid item xs={2} className={classes.gridImage}>
                  <img src={Profile} className={classes.image} alt="avatar" />
                </Grid>
                <Grid item xs={6} className={classes.gridName}>
                  <Typography className={classes.name}>
                    Kina Gatie Putri
                  </Typography>

                  <Typography className={classes.nik}>
                    NIK : 0987098709870987
                  </Typography>
                </Grid>
                <Grid item xs={4} className={classes.gridEdit}>
                  <Link className={classes.link} to="/edit-profil">
                    Edit Profile
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.gridItem}></Grid>
            <Grid item xs={12} className={classes.gridItemCenter}>
              <Grid container spacing={0} className={classes.gridTwo}>
                <Grid item xs={2} className={classes.icon}>
                  <img src={User} alt="user" />
                </Grid>
                <Grid
                  item
                  xs={5}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography className={classes.text}>
                    Anggota Keluarga
                  </Typography>
                </Grid>
                <Grid item xs={5} className={classes.arrow}>
                  <Link className={classes.linkArrow} to="/list-anggota">
                    <ArrowForwardIosIcon className={classes.icon} />
                  </Link>
                </Grid>
                <Grid item xs={0} className={classes.arrow}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.gridItemBottom}>
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
          </Grid>
          <BottomNavigation />
        </Container>
      </React.Fragment>
    );
  }
}

export default component;
