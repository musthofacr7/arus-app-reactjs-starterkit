import React from 'react';
// import Appbar from "../../component/appbar";
import BottomNavigation from '../../component/bottom-navigation';
import { Container, Grid } from '@material-ui/core';

class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.Container}>
        <Grid
          align="center"
          container
          spacing={0}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 3
          }}
        >
          <Grid
            xs={3}
            style={{ background: '#26CAC0', height: '172px', width: '360px' }}
            align="center"
          >
            <Grid container spacing={0} style={{}}>
              <Grid xs={2} style={{ background: 'red' }}>
                1
              </Grid>
              <Grid xs={2} style={{ background: 'white' }}>
                2
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={5} style={{ background: 'white' }}>
            2
          </Grid>
          <Grid xs={2} style={{ background: 'red' }}>
            <Grid
              container
              spacing={0}
              style={{ display: 'flex', flexDirection: 'column', flex: 0 }}
            >
              <Grid xs={6} style={{ background: '#26CAC0' }}>
                1
              </Grid>
              <Grid xs={6} style={{ background: 'white' }}>
                2
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <BottomNavigation />
      </Container>
    );
  }
}

export default component;
