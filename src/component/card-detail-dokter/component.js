import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function CardDetailDokter(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={0} className={classes.gridContent}>
        <Grid container spacing={0} className={classes.gridItemCard}>
          <Grid item xs={12} className={classes.gridText}>
            <Typography className={classes.day}>Senin</Typography>
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

        <Grid container spacing={0} className={classes.gridItemCard}>
          <Grid item xs={12} className={classes.gridText}>
            <Typography className={classes.day}>Selasa</Typography>
          </Grid>

          <Grid container spacing={0} className={classes.gridBoxTwo}>
            <Grid item xs={4} className={classes.boxTwo}>
              <Typography className={classes.waktu}>09:00 - 12:00</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.gridItemCard}>
          <Grid item xs={12} className={classes.gridText}>
            <Typography className={classes.day}>Rabu</Typography>
          </Grid>

          <Grid container spacing={0} className={classes.gridBoxTwo}>
            <Grid item xs={4} className={classes.boxThree}>
              <Typography className={classes.waktu}>09:00 - 12:00</Typography>
            </Grid>
            <Grid item xs={4} className={classes.boxThree}>
              <Typography className={classes.waktu}>09:00 - 12:00</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.gridItemCard}>
          <Grid item xs={12} className={classes.gridText}>
            <Typography className={classes.day}>Kamis</Typography>
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

        <Grid container spacing={0} className={classes.gridItemCard}>
          <Grid item xs={12} className={classes.gridText}>
            <Typography className={classes.day}>Jumat</Typography>
          </Grid>

          <Grid container spacing={0} className={classes.gridBoxTwo}>
            <Grid item xs={5} className={classes.boxFree}>
              <Typography className={classes.waktuFree}>
                Tidak Ada Jadwal
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.gridItemCardBottom}>
          <Grid item xs={12} className={classes.gridText}>
            <Typography className={classes.day}>Sabtu</Typography>
          </Grid>

          <Grid container spacing={0} className={classes.gridBoxTwo}>
            <Grid item xs={4} className={classes.boxThree}>
              <Typography className={classes.waktu}>09:00 - 12:00</Typography>
            </Grid>
            <Grid item xs={4} className={classes.boxThree}>
              <Typography className={classes.waktu}>09:00 - 12:00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CardDetailDokter;
