import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import AmbilNomorIcon from "../../assets/ambilnomor.png";

function AmbilNomorAntrian(props) {
  const { classes } = props;
  return (
    <Grid className={classes.card}>
      <Grid container spacing={0} className={classes.gridCard}>
        <Grid item xs={4} className={classes.gridLeft}>
          <img src={AmbilNomorIcon} alt="ambil antrian" />
        </Grid>
        <Grid item xs={8} className={classes.gridRight}>
          <Link className={classes.textRight} to="/pilih-loket">
            Ambil Nomor Antrian
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AmbilNomorAntrian;
