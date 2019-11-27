import React from 'react';
import { Typography, Grid, Container, Box } from '@material-ui/core';

import AppBar from '../../component/appbar';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.Container}>
        <AppBar goBack title="Riwayat Kunjungan" />

        <Grid item className={classes.gridContent}>
          <Typography className={classes.SedangBerjalan}>
            Sedang Berjalan
          </Typography>
          <Box className={classes.BoxMiddle}>
            <Grid container spacing={5} item className={classes.GridTop}>
              <Grid align="center" item xs={4} className={classes.gridUpper}>
                <Typography className={classes.content}>Tanggal</Typography>
                <Typography className={classes.input}>12/11/19</Typography>
              </Grid>
              <Grid align="center" item xs={4} className={classes.gridMiddle}>
                <Typography className={classes.content}>No Antrian</Typography>
                <Typography className={classes.input}> 12A</Typography>
              </Grid>
              <Grid align="center" item xs={3}>
                <Typography className={classes.content}>Loket</Typography>
                <Typography className={classes.input}>Locket A</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid container spacing={0} className={classes.gridContainer}>
          <Grid item>
            <Grid container spacing={2} className={classes.containerContent}>
              <Grid item>
                <Typography className={classes.RiwayatKunjungan}>
                  Riwayat Kunjungan
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.JumlahRiwayat}>(4)</Typography>
              </Grid>
            </Grid>
            <Box className={classes.BoxMiddle}>
              <Grid container spacing={5} item className={classes.GridTop}>
                <Grid align="center" item xs={4} className={classes.boxBorder}>
                  <Typography className={classes.content}>Tanggal</Typography>
                  <Typography className={classes.input}>12/11/19</Typography>
                </Grid>
                <Grid align="center" item xs={4} className={classes.boxBorder}>
                  <Typography className={classes.content}>
                    No Antrian
                  </Typography>
                  <Typography className={classes.input}> 12A</Typography>
                </Grid>
                <Grid align="center" item xs={3}>
                  <Typography className={classes.content}>Loket</Typography>
                  <Typography className={classes.input}>Locket A</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default component;
