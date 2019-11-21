import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  List,
  ListItem
} from '@material-ui/core';
import AppBar from '../../component/appbar';
import BoxLoket from '../../component/Box-category-loket';
import BottomNavigation from '../../component/bottom-navigation';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.Container}>
        <AppBar goBack title="Pilih Loket Antrian" />
        <Grid
          container
          spacing={4}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '15%',
            padding: '2%'
          }}
        >
          <Grid item>
            <BoxLoket />
          </Grid>
          <Grid item>
            <BoxLoket />
          </Grid>
          <Grid item>
            <BoxLoket />
          </Grid>
        </Grid>
        <BottomNavigation />
      </Container>
    );
  }
}

export default component;
