import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

function CardAnggota(props) {
  const { classes, nik, name } = props;
  return (
    <Grid className={classes.card}>
      <Grid container spacing={0} className={classes.cardContainer}>
        <Grid item xs={1} />

        <Grid item xs={5} className={classes.gridLeft}>
          <Typography className={classes.nik}>NIK: {nik}</Typography>
          <Link to="/list-anggota/:id" className={classes.name}>
            <Typography> {name}</Typography>
          </Link>
        </Grid>
        <Grid item xs={4} className={classes.gridRight}>
          <Link to="/edit-profil-keluarga" className={classes.links}>
            Edit
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardAnggota;
