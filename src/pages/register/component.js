import React from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Grid,
  Button
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

function SplashScreen(props) {
  const handleSignUp = () => {
    props.history.push('./login');
  };
  const { classes } = props;
  return (
    <Container maxWidth="xs" className={classes.Container}>
      <Typography align="center" className={classes.textOne}>
        Register
      </Typography>
      <Typography align="center" className={classes.textTwo}>
        Antrian Rumah Sakit
      </Typography>

      <Paper
        align="center"
        style={{
          display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          padding: '3em',

          flexDirection: 'column',
          marginTop: '2%'
        }}
      >
        <Grid
          container
          spacing={2}
          style={{ display: 'flex', flexDirection: 'column', padding: 12 }}
        >
          <Grid item xs>
            <Grid
              container
              spacing={2}
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              <Grid item xs={6}>
                <TextField placeholder="First Name" />
              </Grid>
              <Grid item xs={6}>
                <TextField placeholder="Last Name" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TextField placeholder="Username" />
          </Grid>
          <Grid item>
            <TextField placeholder="Email" type="email" />
          </Grid>
          <Grid item>
            <TextField placeholder="Password" type="password" />
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <Button
              style={{
                backgroundColor: '#F7A647',
                border: '1px solid #E9F9F8',
                width: '100%'
              }}
            >
              Register
            </Button>
          </Grid>
          <Grid item>
            <Typography>Already a member ?</Typography>{' '}
            <Typography style={{ fontWeight: 'bold' }} onClick={handleSignUp}>
              Sign in
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default withRouter(SplashScreen);
