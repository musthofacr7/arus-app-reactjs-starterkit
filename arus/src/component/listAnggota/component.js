import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={1} className={classes.gridLeft}></Grid>
        <Grid item xs={7} className={classes.gridCenter}>
          <Grid container spacing={0} className={classes.itemRight}>
            <Grid item xs className={classes.topGridRight}>
              <Typography className={classes.nik}>
                NIK: 0987098709870987
              </Typography>
            </Grid>
            <Grid item xs={8} className={classes.bottomGridRight}>
              <Typography className={classes.name}>
                Samantha William
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} className={classes.gridRight} >
          <Link to="/edit-data-keluarga" className={classes.links}>
            <Typography className={classes.edit} >Edit</Typography>
          </Link>
        </Grid>
      </Grid>
    );
  }
}

export default component;
