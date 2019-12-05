import React from 'react';
import BottomNavigation from '../../component/bottom-navigation';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Profile from '../../assets/avatar.png';
import AmbilNomor from '../../component/ambil-nomor-antrian';
import CekJadwalDokterHome from '../../component/cek-jadwal-dokter-home';

function HomePage(props) {
  const { classes } = props;
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs className={classes.gridOne}>
          <Grid
            container
            spacing={0}
            align="center"
            className={classes.containerProfil}
          >
            <Grid item xs={2} className={classes.image} align="center">
              <img src={Profile} alt="avatar" />
            </Grid>
            <Grid item xs={0} className={classes.gridName}>
              <Typography className={classes.name}>Kina Gatie Putri</Typography>
              <Typography className={classes.nik}>NIK: 098709870987</Typography>
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
          <Grid container spacing={0} className={classes.contentTwo}>
            <AmbilNomor />
          </Grid>
          <Grid container spacing={0} className={classes.contentTwo}>
            <CekJadwalDokterHome />
          </Grid>
        </Grid>
      </Grid>

      <BottomNavigation />
    </Container>
  );
}

export default HomePage;