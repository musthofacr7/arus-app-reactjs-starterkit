import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
function BoxCategory(props) {
  const { classes, title, current_queue, last_queue } = props;
  return (
    <Grid
      container
      spacing={0}
      className={classes.gridContainer}
      onClick={props.click}
    >
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
            <Typography className={classes.nomorSekarang}>
              {' '}
              {current_queue}{' '}
            </Typography>
          </Grid>
          <Grid item xs className={classes.bottomGridRight}>
            <Typography className={classes.nomorAntrian}>
              Nomor Antrian Terakhir
            </Typography>
            <Typography className={classes.nomorTerakhir}>
              {' '}
              {last_queue}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BoxCategory;
