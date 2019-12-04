import React from 'react';
import {
  Typography,
  Grid,
  Container,
  Box,
  Button,
  CssBaseline
} from '@material-ui/core';
import AppBar from '../../component/appbar';
import Profile from '../../assets/avatar.png';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import User from '../../assets/users.png';
import BottomNavigation from "../../component/bottom-navigation";

function DetailAnggota(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Profile" />

        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridTop}>
            <Grid container spacing={0} className={classes.gridContent}>
              <Grid item xs={12} className={classes.gridItem}>
                <Grid container spacing={0} className={classes.gridItemOne}>
                  <Grid item xs={2} className={classes.gridField}>
                    <img src={Profile} className={classes.image} alt="avatar" />
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
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs style={{ padding: 15 }} />
        </Grid>
        <Grid container align="center" spacing={0} className={classes.gridTwo}>
          <Grid item xs={2} className={classes.icon}>
            <img src={User} alt="user" />
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.text}>Anggota Keluarga</Typography>
          </Grid>
          <Grid item xs={4} className={classes.arrow}>
            <Link className={classes.linkArrow} to="/list-anggota">
              <ArrowForwardIosIcon className={classes.icon} />
            </Link>
          </Grid>
          <Grid item xs={1} className={classes.arrow}></Grid>
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
        <BottomNavigation/>
      </Container>
    </React.Fragment>
  );
}

export default DetailAnggota;
