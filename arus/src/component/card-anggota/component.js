import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.card}>
        <Grid container spacing={0} className={classes.cardContainer}>
          <Grid item xs={6} className={classes.gridLeft}>
            <Typography className={classes.nik}>
              NIK: 0987098709870987
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridRight}>
            <Link to="/edit-data-keluarga" className={classes.links}>
              Edit
            </Link>
          </Grid>
          <Grid item xs={12} className={classes.gridLeftBottom}>
            <Typography className={classes.name}>Samantha William</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default component;
