import React from 'react';
import { Container, Typography, Grid, Fab } from '@material-ui/core';
import AppBar from '../../component/appbar';
import BoxLoket from '../../component/Box-category-loket';
import BottomNavigation from '../../component/bottom-navigation';
import { Link } from 'react-router-dom';
import ListData from '../../component/listAnggota';
import AddIcon from '@material-ui/icons/Add';

class component extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="xs" className={classes.Container}>
        <AppBar goBack title="Anggota Keluarga" />

        <Grid container spacing={4} className={classes.gridUpper}>
          <Grid item>
            <ListData />
          </Grid>

          <Grid item>
            <ListData />
          </Grid>

          <Grid item>
            <ListData />
          </Grid>

          <Grid item>
            <ListData />
          </Grid>
        </Grid>
        
          <Fab
          align="center"
            margin="normal"
            style={{ backgroundColor: '#26CAC0', color: '#FFFFFF' }}
            aria-label="add"
            className={classes.plus}
          >
            <AddIcon />
          </Fab>
      
        <BottomNavigation />
      </Container>
    );
  }
}

export default component;
