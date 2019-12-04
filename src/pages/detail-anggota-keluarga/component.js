import React from 'react';
import {
  Typography,
  Grid,
  Container,
  Box,
  CssBaseline,
  Button
} from '@material-ui/core';
import AppBar from '../../component/appbar';

function DetailAnggota(props) {
  const { classes } = props;

  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Profil Keluarga" />

        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridTop}>
            <Grid container spacing={0} className={classes.gridContent}>
              <Grid item xs={12} className={classes.gridItem}>
                <Typography className={classes.content}>Nama</Typography>
                <Typography className={classes.input}>William</Typography>
              </Grid>
              <Grid item xs={12} className={classes.gridItem}>
                <Typography className={classes.content}>
                  Nomor Induk Kependudukan (NIK)
                </Typography>
                <Typography className={classes.input}>989831290001</Typography>
              </Grid>
              <Grid item xs={12} className={classes.gridItem}>
                <Typography className={classes.content}>Umur</Typography>
                <Typography className={classes.input}>19 tahun</Typography>
              </Grid>
              <Grid item xs={12} className={classes.gridItem}>
                <Typography className={classes.content}>
                  Jenis Kelamin
                </Typography>
                <Typography className={classes.input}>Laki Laki</Typography>
              </Grid>
              <Grid item xs={12} className={classes.gridItem}>
                <Typography className={classes.content}>
                  Tanggal Lahir
                </Typography>
                <Typography className={classes.input}>20 Maret 2000</Typography>
              </Grid>
              <Grid item xs={12} className={classes.gridItem}>
                <Typography className={classes.content}>
                  Tempat Lahir
                </Typography>
                <Typography className={classes.input}>Semarang</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.gridButton}>
            <Box className={classes.buttonBox}>
              <Button
                disableRipple={true}
                id="submit-button"
                className={classes.button}
              >
                Hapus Data Anggota Keluarga
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default DetailAnggota;
