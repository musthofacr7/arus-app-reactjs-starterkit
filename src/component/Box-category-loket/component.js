import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';

function BoxCategory(props) {
  const { classes, title } = props;
  return (
    <Grid container spacing={0} className={classes.gridContainer}>
      <Grid item xs={5} className={classes.gridLeft}>
        <Box className={classes.BoxLoket}>
          <Typography className={classes.TypographyLoket}>Locket</Typography>

          <Typography className={classes.TypographyLoketCategory}>
            {title}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={7} className={classes.gridRight}>
        <Grid container spacing={0} className={classes.itemRight}>
          <Grid item xs className={classes.topGridRight}>
            <Typography className={classes.nomorAntrian}>
              Nomor Antrian Saat ini
            </Typography>
            <Typography className={classes.nomorSekarang}> 12 A </Typography>
          </Grid>
          <Grid item xs className={classes.bottomGridRight}>
            <Typography className={classes.nomorAntrian}>
              Nomor Antrian Terakhir
            </Typography>
            <Typography className={classes.nomorTerakhir}> 102 A</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BoxCategory;
