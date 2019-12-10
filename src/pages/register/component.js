import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import { register } from '../../services/register';

function SplashScreen(props) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    nik: '',
    errorPassword: '',
    errorEmail: ''
  });
  const [err, setErr] = useState(false);
  const Toggle = () => {
    var temp = document.getElementById('txtPass');
    if (temp.type === 'password') {
      temp.type = 'text';
    } else {
      temp.type = 'password';
    }
  };
  const handleChange = e => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    if (data.password.length < 7) {
      setErr(true);
    } else {
      setErr(false);
    }
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*(\.\w{2,3})/.test(data.email)
    ) {
      setErr(true);
      console.log('email benar');
    } else {
      setErr(false);
      console.log('email salah');
    }
  };
  useEffect(() => {}, []);
  const handleClick = async () => {
    register(data)
      .then(res => {
        console.log(res);
        props.history.push('/');
      })
      .catch(err => console.log(err));
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

      <Paper align="center" className={classes.paperUp}>
        <Grid container spacing={2} className={classes.gridContainer}>
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
              required
              error={err}
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
          </Grid>
          <Grid item>
            <TextField
              helperText="at least have 8 characters"
              error={err}
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
          </Grid>
          <Grid item>
            <TextField
              placeholder="Password Confirmation"
              type="password"
              name="password_confirmation"
              onChange={handleChange}
              value={data.password_confirmation}
            />
          </Grid>
          <Grid item>
            <TextField
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={data.phone}
            />
          </Grid>
          <Grid item>
            <TextField
              placeholder="NIK"
              name="nik"
              onChange={handleChange}
              value={data.nik}
            />
          </Grid>
          <Grid item className={classes.gridBottom}>
            <Button
              style={{
                backgroundColor: '#F7A647'
              }}
              className={classes.registerButton}
              onClick={handleClick}
            >
              Register
            </Button>
          </Grid>
          <Grid item>
            <Typography>Already a member ?</Typography>
            <Typography className={classes.signIn} onClick={handleSignIn}>
              Sign in
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default withRouter(SplashScreen);
