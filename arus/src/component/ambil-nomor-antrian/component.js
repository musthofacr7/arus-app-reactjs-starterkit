import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import AmbilNomorIcon from '../../assets/ambilnomor.png';
import Typography from '@material-ui/core/Typography';
class Component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.card}>
        <Grid container spacing={0} className={classes.gridCard}>
          <Grid item xs={6} className={classes.gridLeft}>
            <img src={AmbilNomorIcon} />
          </Grid>
          <Grid item xs={6} className={classes.gridRight}>
            <Link className={classes.textRight} to="/pilih-loket">
              Ambil Nomor Antrian
            </Link>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Component;
