import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function CardDetailDokter(props) {
  const { classes, hari, tanggal } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={0} className={classes.gridContent}>
        <Grid item xs={12} className={classes.gridItemCard}>
          <Grid container spacing={0} className={classes.gridItemOne}>
            <Grid item xs={8} className={classes.gridText}>
              <Typography className={classes.day}>{hari}</Typography>
              <Typography className={classes.tanggal}>{tanggal}</Typography>
            </Grid>
            <Grid item xs={4} className={classes.gridText}>
              <Typography className={classes.poli}>Spesialis Gigi</Typography>
            </Grid>

            <Grid container spacing={0} className={classes.gridBox}>
              <Grid item xs={4} className={classes.boxOne}>
                <Typography className={classes.waktu}>09:00 - 12:00</Typography>
              </Grid>
              <Grid item xs={4} className={classes.boxOne}>
                <Typography className={classes.waktu}>09:00 - 12:00</Typography>
              </Grid>
              <Grid item xs={4} className={classes.boxOne}>
                <Typography className={classes.waktu}>09:00 - 12:00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CardDetailDokter;
