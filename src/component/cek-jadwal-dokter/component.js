import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import AmbilNomorIcon from '../../assets/ambilnomor.png';

function AmbilNomorAntrian(props){
    const { classes } = props;
    return (
      <Grid className={classes.card}>
        <Grid container spacing={0} className={classes.gridCard}>
          <Grid item xs={6} className={classes.gridLeft}>
            <img src={AmbilNomorIcon}  alt="ambil antrian"/>
          </Grid>
          <Grid item xs={6} className={classes.gridRight}>
            <Link className={classes.textRight} to="/cek-jadwal-dokter">
              Cek Jadwal Dokter
            </Link>
          </Grid>
        </Grid>
      </Grid>
    );
  }


export default AmbilNomorAntrian;
