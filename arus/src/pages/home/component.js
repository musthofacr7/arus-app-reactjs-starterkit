import React from 'react';
// import Appbar from "../../component/appbar";
import BottomNavigation from '../../component/bottom-navigation';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import BoxPilihLoket from '../../component/Box-category-loket';
import AmbilAntrianIcon from '../../assets/Group 20.png';
import Profile from '../../assets/Ellipse 8.png';
import { Link } from 'react-router-dom';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.container}>
        <Grid container spacing={0} className={classes.gridContainer}>
          <Grid item xs={3} className={classes.gridUpper}>
            <Grid
              container
              spacing={0}
              align="center"
              className={classes.containerProfil}
            >
              <Grid item xs={3} className={classes.image} align="center">
                <img src={Profile} />
              </Grid>
              <Grid item xs={4} className={classes.name} align="center">
                Kina Gatie Putri
              </Grid>
            </Grid>
          </Grid>
          <Grid align="center" item xs={6} className={classes.gridBottom}>
            <Grid spacing={0} className={classes.antrian}>
              <Grid item xs={6} className={classes.gridText}>
                <Typography className={classes.nomorAntrian}>
                  Nomor Antrian Anda
                </Typography>
              </Grid>
              <Grid item xs={4} className={classes.gridNumb}>
                <Typography className={classes.nomor}>12 A</Typography>
              </Grid>
              <Grid item xs={4} className={classes.gridLocket}>
                <Typography className={classes.locket}>Locket A</Typography>
                <Box align="center" className={classes.box}>
                  <Typography className={classes.estimasi}>
                    Estimasi di panggil pukul
                    <strong className={classes.waktu}> 14:00 </strong>WIB
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={0}></Grid>
            </Grid>

            <Grid item xs={6} className={classes.gridLink}>
              <Link to="/pilih-locket" className={classes.link}>
                <Grid container spacing={0} className={classes.contentTwo}>
                  <Grid item xs={2}>
                    <img src={AmbilAntrianIcon} />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography className={classes.ambilNomor}>
                      Ambil Nomor Antrian
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <BottomNavigation />
      </Container>
    );
  }
}

export default component;
