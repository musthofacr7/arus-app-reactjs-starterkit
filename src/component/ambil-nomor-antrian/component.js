import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import AmbilNomorIcon from '../../assets/ambilnomor.png';

function AmbilNomorAntrian(props) {
  const { classes } = props;
  return (
      <Paper onClick={handleClick}>
      <Grid className={classes.card}>
        <Grid container spacing={0} className={classes.gridCard}>
          <Grid item xsclassName={classes.gridLeft}>
            <img src={AmbilNomorIcon} alt="ambil antrian" />
          </Grid>
          <Grid item xs className={classes.gridRight}>
            Ambil Nomor Antrian
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AmbilNomorAntrian;
