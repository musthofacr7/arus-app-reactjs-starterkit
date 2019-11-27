import React from 'react';
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
          <Grid item xs={12} className={classes.gridOne}>
            <Grid
              container
              spacing={0}
              align="center"
              className={classes.containerProfil}
            >
              <Grid item xs={2} className={classes.image} align="center">
                <img src={Profile} />
              </Grid>
              <Grid item xs={0} className={classes.gridName} align="center">
                <Typography className={classes.name}>
                  Kina Gatie Putri
                </Typography>
                <Typography className={classes.nik}>
                  NIK: 098709870987
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridTwo}>
            <Grid className={classes.antrian} align="center">
              <Grid item xs={2} className={classes.gridText}>
                <Typography className={classes.nomorAntrian}>
                  Nomor Antrian Anda
                </Typography>
              </Grid>
              <Grid item xs={2} className={classes.gridNumb}>
                <Typography className={classes.nomor}>12 A</Typography>
                <Typography className={classes.locket}>Locket A</Typography>
              </Grid>
              <Grid item xs={6} className={classes.gridLocket}>
                <Box align="center" className={classes.box}>
                  <Typography className={classes.estimasi}>
                    Estimasi di panggil pukul
                    <strong className={classes.waktu}> 14:00 </strong>WIB
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={0}></Grid>
            </Grid>
          <Grid item xs={7} className={classes.contentTwo} align="center">
            {/* <Grid item xs={6} className={classes.gridLocket}> */}
            <Link to="/pilih-locket" className={classes.link}>
              {/* <Grid container spacing={0} className={classes.contentTwo}> */}
              <Grid item xs={6}>
                <img src={AmbilAntrianIcon} />
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.ambilNomor}>
                  Ambil Nomor Antrian
                </Typography>
              </Grid>
              {/* </Grid> */}
            </Link>
            {/* </Grid> */}
            <Grid item xs={0}></Grid>
          </Grid>
        </Grid>
        </Grid>


        <BottomNavigation />
      </Container>
    );
  }
}

export default component;
