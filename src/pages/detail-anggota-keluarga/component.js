import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import AppBar from '../../component/appbar';
import Modal from '../../component/modal-hapus-datakeluarga';
import { getDetailAnggota } from '../../services/anggota';
function DetailAnggota(props) {
  const [open, setOpen] = useState(false);
  const { classes } = props;
  const [detail, setDetail] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const id = props.match.params.id;
    const getDetail = async () => {
      const detail = await getDetailAnggota(id);
      setDetail(detail);
    };
    getDetail();
  }, []);
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
                <Typography className={classes.input}>{detail.nama}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.gridItem}>
                <Typography className={classes.content}>
                  Nomor Induk Kependudukan (NIK)
                </Typography>
                <Typography className={classes.input}>{detail.nik}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.gridItem}>
                <Typography className={classes.content}>Umur</Typography>
                <Typography className={classes.input}>{detail.umur}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.gridItem}>
                <Typography className={classes.content}>
                  Jenis Kelamin
                </Typography>
                <Typography className={classes.input}>
                  {detail.jenis_kelamin}
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.gridItem}>
                <Typography className={classes.content}>
                  Tanggal Lahir
                </Typography>
                <Typography className={classes.input}>
                  {detail.tanggal_lahir}
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.gridItem}>
                <Typography className={classes.content}>
                  Tempat Lahir
                </Typography>
                <Typography className={classes.input}>
                  {detail.tempat_lahir}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.gridButton}>
            <Button
              onClick={handleOpen}
              disableRipple={true}
              id="submit-button"
              className={classes.button}
            >
              <Typography style={{ textTransform: 'none', fontSize: '14px' }}>
                Hapus Data Anggota Keluarga
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Modal open={open} handleOpen={handleOpen} handleClose={handleClose} />
      </Container>
    </React.Fragment>
  );
}

export default DetailAnggota;
