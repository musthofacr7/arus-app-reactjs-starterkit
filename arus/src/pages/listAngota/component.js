import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import AppBar from '../../component/appbar';
import BoxLoket from '../../component/Box-category-loket';
import BottomNavigation from '../../component/bottom-navigation';
import { Link } from 'react-router-dom';
import ListData from '../../component/listAnggota';

class component extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="xs" className={classes.Container}>
        <AppBar goBack title="Anggota Keluarga" />

        <Grid container spacing={4} className={classes.gridUpper}>
          {/* <Link className={classes.link} onClick={this.handleOpen}> */}
            <Grid item>
              <ListData />
            </Grid>
          {/* </Link> */}
          {/* <Link className={classes.link} onClick={this.handleOpen}> */}
            <Grid item>
              <ListData />
            </Grid>
          {/* </Link> */}
          {/* <Link className={classes.link} onClick={this.handleOpen}> */}
            <Grid item>
              <ListData />
            </Grid>
          {/* </Link> */}
          {/* <Link className={classes.link} onClick={this.handleOpen}> */}
            <Grid item>
              <ListData />
            </Grid>
          {/* </Link> */}
        </Grid>

        <BottomNavigation />
      </Container>
    );
  }
}

export default component;
