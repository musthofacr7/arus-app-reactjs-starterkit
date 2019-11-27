import React from 'react';
import BottomNavigation from '../../component/bottom-navigation';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import BoxPilihLoket from '../../component/Box-category-loket';
import AmbilAntrianIcon from '../../assets/Group 20.png';
import Profile from '../../assets/Ellipse 8.png';
import { Link } from 'react-router-dom';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.container}>
        <Grid container spacing={0} className={classes.gridContainer}>
          <Grid item xs={12} className={classes.gridOne}>
            <Grid
              container
              spacing={0}
              align="center"
              className={classes.containerProfil}
            >
              <Grid item xs={6} className={classes.image} align="center">
                <img src={Profile} />
              </Grid>
              <Grid item xs={6} className={classes.name} align="center">
                Kina Gatie Putri
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridTwo}></Grid>
        </Grid>

        <BottomNavigation />
      </Container>
    );
  }
}

export default component;
