import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Grid,
  Button
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { register } from '../../services/register';

function SplashScreen(props) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    nik: ''
  });
  const handleChange = e => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    console.log(data);
  };
  const handleClick = async () => {
    register(data).then(res => {
      console.log(res);
      props.history.push('/login');
    });
  };
  const handleSignIn = () => {
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
          <Grid item>
            <TextField
              name="name"
              onChange={handleChange}
              value={data.name}
              placeholder="name"
            />
          </Grid>
          <Grid item>
            <TextField
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
          </Grid>
          <Grid item>
            <TextField
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
          </Grid>{' '}
          <Grid item>
            <TextField
              placeholder="Password Confirmation"
              type="password"
              name="password_confirmation"
              onChange={handleChange}
              value={data.password_confirmation}
            />
          </Grid>{' '}
          <Grid item>
            <TextField
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={data.phone}
            />
          </Grid>{' '}
          <Grid item>
            <TextField
              placeholder="NIK"
              name="nik"
              onChange={handleChange}
              value={data.nik}
            />
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <Button
              style={{
                backgroundColor: '#F7A647',
                border: '1px solid #E9F9F8',
                width: '100%'
              }}
              onClick={handleClick}
            >
              Register
            </Button>
          </Grid>
          <Grid item>
            <Typography>Already a member ?</Typography>{' '}
            <Typography style={{ fontWeight: 'bold' }} onClick={handleSignIn}>
              Sign in
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default withRouter(SplashScreen);
